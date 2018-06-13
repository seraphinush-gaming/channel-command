// Version 1.37 r:03

const Command = require('command')

// credit : https://github.com/Some-AV-Popo
String.prototype.clr = function (hexColor) { return `<font color="#${hexColor}">${this}</font>` }

module.exports = function CmdChannel(d) {
	const command = Command(d)

	let currentChannel = 0

	// command
	command.add(['ch', 'c', 'ㅊ'], (arg) => {
		// change to specified channel
		if (!isNaN(arg)) changeChannel(arg)
		// change to next channel
		else if (['n', 'ㅜ'].includes(arg)) changeChannel(currentChannel.channel + 1)
		// change to previous channel
		else if (['b', 'ㅠ'].includes(arg)) changeChannel(currentChannel.channel - 1)
		else send(`Invalid argument.`.clr('FF0000'))
	})

	// code
	d.hook('S_CURRENT_CHANNEL', 2, (e) => { currentChannel = e })

	// helper
	// in case of dungeon/instance, return
	// if 0, let 0 be 10 for convenience
	// if same channel requested, return error message
	// channel index starts at 0, so decrement by 1
	function changeChannel(newChannel) {
		if (currentChannel.channel > 20) return
		if (newChannel == 0) newChannel = 10
		if (newChannel == currentChannel.channel) {
			send(`Same channel selected.`.clr('FF0000'))
			return
		}
		newChannel -= 1
		d.send('C_SELECT_CHANNEL', 1, {
			unk: 1,
			zone: currentChannel.zone,
			channel: newChannel
		})
	}

	function send(msg) { command.message(`[cmd-channel] : ` + msg) }

}
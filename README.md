# cmd-channel
tera-proxy module to change channel via chat

## Dependency
- `Command` module

## Usage
- __`ch` · `c` · `ㅊ`__
  - Base command, requires a parameter
### Arguments
- __`num`__
  - Select channel `num`, where `num` is the channel number
  - Channel `10` can be alternatively selected with `0`
  - eg. `ch num`
- __`n` · `ㅜ`__
  - Select the "n"ext channel
- __`b` · `ㅠ`__
  - Select the preceding channel (go "b"ack a channel)
  - No channel precedes channel `1`

## Info
- Original author : [teralove](https://github.com/teralove)
- **Support seraph via paypal donations, thanks in advance : [paypal](https://www.paypal.me/seraphinush)**
- "Changing channels while inside a dungeon will teleport you out"
- "Changing to a channel number that doesn't exist will send you to channel 1"

## Changelog
<details>

    1.38
    - Removed font color bloat
    1.37
    - Added parameter `b` to go back a channel
    1.36
    - Added auto-update support
    - Added parameter `n` to go to the next channel
    1.35
    - Revised code
    1.34
    - Updated name
    1.33
    - Updated code
    - Added string function
    1.32
    - Updated code aesthetics
    1.31
    - Removed unnecessary hook
    1.30
    - Updated code aesthetics
    1.20
    - Updated code
    - Removed protocol version restriction
    1.10
    - Added Command Dependency
    - Removed format
    1.01
    - Personalized code aesthetics
    1.00
    - Initial fork

</details>

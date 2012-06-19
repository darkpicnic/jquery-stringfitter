jquery-stringfitter
===================

Lightweight plugin that automatically reduces font size of string to fit its width and prevent line breaks

## Example

Recently on a project, I needed a header to automatically reduce its size if it got so long that a line break occured. I couldn't use
an elipsis, so I just wrote a quick plugin to automatically handle this.

## Caution

This plugin determines initial height of object by replaces original text with a single character, then dropping the original
content back in. This may cause flickering or quick presentation of original font-size before shrinking. If this bothers you, I
don't recommend using this plugin.

## Usage

```
$('#some-div h1').stringfitter();
```
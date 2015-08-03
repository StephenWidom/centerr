## CENTERR
A simple jQuery plugin to absolutely horizontally and vertically center an element within its parent

## USE:
```js
$(window).on("load resize",function(){
	$('#targetElement').centerr();
});
```

## OPTIONS:
### mobile:   767
The browser width below which centerr won't adjust the target element

### fullWidth:  false
If true, don't set a value for `left` or `margin-left`

## NOTES:
- You should add "display:none;" to the target element to avoid having it render before properly positioned.
- Make sure your target element's parent is relatively positioned.

[See it in action](http://stephenwidom.com/projects/centerr)

*Developed by Stephen Widom - http://stephenwidom.com*
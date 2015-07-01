# CENTERR
*By Stephen Widom*
## Absolutely center an element within its parent

### USE:
> $(window).on("load resize",function(){
>   $('#targetElement').centerr();
> });

### OPTIONS:
> mobile:   767 // The browser width below which centerr doesn't center

### Notes:
- You should add "display:none;" to the target element to avoid having it render before properly positioned.
- Make sure your target element's parent is relatively positioned.
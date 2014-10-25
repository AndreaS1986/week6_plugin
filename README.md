
## Getting Started

### Manual
Download and included the script after the jQuery library. 

In your index.html file:

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script src="scripts/sunriseSunset.js"></script> 
```

##Documentation

###Basic Usage
As you can see in the [getting started](#getting-started) section, you just need to pass a jQuery selector and call the plugin in order to get it working.

#### Date

If you wanted to add the day 

you can do so by adding "dddd" in front of "MMMM":

```javascript
var updateDate = function(){
		var date = moment().format("MMMM Do, YYYY");
		$('#date').text(date);
	}
	 to
	 var updateDate = function(){
		var date = moment().format("dddd MMMM Do, YYYY");
		$('#date').text(date);
	}
```

If you wanted to change the year to only two digits you can do so by:

"yy"

```javascript
var updateDate = function(){
		var date = moment().format("MMMM Do, YY");
		$('#date').text(date);
	}
	```


#### Time

Right now the time is set on a 12 hour clock if you wanted to change it to 24 hour clock 

you have to change the "hh or h" from lower case to uppercase "HH or H"

```javascript
var updateTime = function (){
			var time = moment().format("h:mm a");
			$('#time').text(time);
			
	}
	to 
	var updateTime = function (){
			var time = moment().format("H:mm a");
			$('#time').text(time);
			
	}
	```
	

####Font Style
If you wanted to change the font-style for both the time and date you can do it in the info id tag or if you want to change just either the time or date you can do it in the time or date section.

__in css__ 
```html
#info{
	text-align: center;
	color: white;
	margin: 0 auto;
	padding-top: 160px;
}

#time{
	font-size: 155px;
	margin-bottom: 50px; 
}

#date{
	font-size: 50px;
}
```

## Examples
You can [see this plugin in action here][example].

[example]: http://AndreaS1986/github.io/week6_plugin

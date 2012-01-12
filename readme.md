# simpleSelect

I needed an easy way to style the window of a select element while maintaining native functionality.
This currently possible in Chrome, but I needed a cross browser solution.

This plugin will simple add a window element to display the currently selected item and wrap the 
window and select element in a container. The select element is absolutely positioned and given 
an opacity of 0 so it is not visible, but still handles the click event accordingly. Pretty simple!

# Options

<table>
	<tr>
	  <th>wrapperClass</th>
	  <td>(string) 'select-wrapper'</td> 
	</tr>
	<tr>
	  <th>windowClass</th>
	  <td>(string) 'select-window'</td>
	</tr>
	<tr>
	  <th>formatWindowContent</th>
	  <td>(callback) A callback for formatting whatever the selected 
	      value is before it's placed in the select window.</td> 
	</tr>
</table>

# License

This plugin is dual licensed under the MIT and GPL licenses, just like jQuery itself.
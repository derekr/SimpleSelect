/*!
 * A jQuery plugin that simply masks a select element and allows custom styling. v0.1
 * @link https://github.com/derekr/SimpleSelect
 * @author Derek Reynolds <http://whatupderek.com/>
 */
(function ($) {
  
  $.fn.simpleSelect = function (options) {
    
    var config = $.extend({
      wrapperClass: 'select-wrapper',
      windowClass:  'select-window',
      formatWindowContent: function (content) {
        return content;
      }
    }, options),
    setWindow = function (content) {
      content = config.formatWindowContent(content);
      selectWindow.html(content);
    };
    
    return this.each(function (i, selectEl) {
      
      var selectEl = $(selectEl);
          selected = selectEl.find(':selected'),
          wrapper = $('<div class="' + config.wrapperClass + '" />'),
          selectWindow = $('<span class="' + config.windowClass + '" />');
      
      selectEl.before(wrapper);
      selectWindow.appendTo(wrapper);
      selectEl.appendTo(wrapper);
      
      selectEl.css({
        opacity: 0,
        zIndex: 1,
        position: 'absolute'
      });
      
      selectEl.change(function (e) {        
        setWindow(selectEl.find('option:selected').text());
      });
      
      wrapper.css({
        position: 'relative'
      });
      
      selectWindow.css({
        position: 'absolute'
      });
      
      // Initialize
      setWindow(selectEl.find('option:selected').text());
    });
  };
  
})(jQuery);
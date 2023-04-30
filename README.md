# ko-simple-component
We will create a knockout.js component in magento 2 using easy steps.


### Post:
Please find the post link below: <br />
https://knowthemage.com/how-to-use-knockout-in-a-simple-component-in-magento-2/

### Youtube:
Find the <strong>YouTube</strong> link below:<br />
<a href="https://www.youtube.com/watch?v=9KlLy_2MgfM&lc=Ugw2Sg0yM52uVAFyjBx4AaABAg" target="_blank">
https://www.youtube.com/watch?v=9KlLy_2MgfM&lc=Ugw2Sg0yM52uVAFyjBx4AaABAg
</a>

Inside your module create `cms_index_index.xml` layout file and specify a custom block under `content` container.

**Know/Module/view/frontend/layout/cms_index_index.xml**

```xml
<?xml version="1.0"?>
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
    <body>
        <referenceContainer name="content">
            <block class="Magento\Framework\View\Element\Template" name="custom.component"
                   template="Know_Module::custom_component.phtml" />
        </referenceContainer>
    </body>
</page>
```

Now create the `custom_component.phtml` template file.
**Know/Module/view/frontend/templates/custom_component.phtml**
```php
<?php
/**
 * @var \Magento\Framework\View\Element\Template $block
 */
?>
<div id="custom-component" data-bind="scope: 'custom-tutorial'">
    <!-- ko template: getTemplate() --><!-- /ko -->
</div>
<script type="text/x-magento-init">
{
    "#custom-component": {
        "Magento_Ui/js/core/app": {
            "components": {
                "custom-tutorial": {
                    "component": "Know_Module/js/customViewModel",
                    "template": "Know_Module/custom-component-tpl"
                }
            }
        }
    }
}
</script>
```

Now it is time to create our custom component js file. So go ahead and create **customViewModel.js**
```javascript
define(['uiComponent'], function (Component) {
    "use strict";
 
    return Component.extend({
        initialize: function () {
            this._super();
            alert("initialized the custom component.");
        }
    });
});
```
Next create the component template file `custom-component-tpl.html`
**Know/Module/view/frontend/web/template/custom-component-tpl.html**
```html
<h1>Custom template</h1>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
```
Clear the static content and flush the cache, then try it in your browser. At first an alert message will appear:

initialized component alert message
<picture>
  <img alt="alert message after component initialized." src="https://knowthemage.com/wp-content/uploads/2023/01/initialized-component-alert-message.png">
</picture>

After clicking the “ok” button the template will render.
<picture>
<img src="https://knowthemage.com/wp-content/uploads/2023/01/component-rendered-template-output.png">
</picture>

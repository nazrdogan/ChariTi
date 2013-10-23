Ext.data.JsonP.social({"subclasses":[],"requires":[],"aliases":{},"superclasses":[],"uses":["core","dk.napp.social"],"mixins":[],"alternateClassNames":[],"meta":{},"files":[{"href":null,"filename":"social.js"}],"component":false,"members":[{"owner":"social","meta":{},"name":"activitySupported","id":"property-activitySupported","tagname":"property"},{"owner":"social","meta":{},"name":"emailSupported","id":"property-emailSupported","tagname":"property"},{"owner":"social","meta":{},"name":"twitterSupported","id":"property-twitterSupported","tagname":"property"},{"owner":"social","meta":{},"name":"email","id":"method-email","tagname":"method"},{"owner":"social","meta":{},"name":"share","id":"method-share","tagname":"method"},{"owner":"social","meta":{},"name":"shareActivityView","id":"method-shareActivityView","tagname":"method"},{"owner":"social","meta":{},"name":"twitter","id":"method-twitter","tagname":"method"}],"html":"<div><pre class=\"hierarchy\"><h4>Uses</h4><div class='dependency'><a href='#!/api/core' rel='core' class='docClass'>core</a></div><div class='dependency'>dk.napp.social</div></pre><div class='doc-contents'><p>Social sharing class</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-activitySupported' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='social'>social</span><br/></div><a href='#!/api/social-property-activitySupported' class='name expandable'>activitySupported</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'><p>If ActivityView is supported by the device</p>\n</div><div class='long'><p>If ActivityView is supported by the device</p>\n      <p>Platform: <b>iOS</b></p>\n</div></div></div><div id='property-emailSupported' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='social'>social</span><br/></div><a href='#!/api/social-property-emailSupported' class='name expandable'>emailSupported</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'><p>If e-mail is supported by the device</p>\n</div><div class='long'><p>If e-mail is supported by the device</p>\n      <p>Platform: <b>iOS</b></p>\n</div></div></div><div id='property-twitterSupported' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='social'>social</span><br/></div><a href='#!/api/social-property-twitterSupported' class='name expandable'>twitterSupported</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'><p>If Twitter is supported by the device</p>\n</div><div class='long'><p>If Twitter is supported by the device</p>\n      <p>Platform: <b>iOS</b></p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-email' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='social'>social</span><br/></div><a href='#!/api/social-method-email' class='name expandable'>email</a>( <span class='pre'>_url</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Shares information via e-mail ...</div><div class='long'><p>Shares information via e-mail</p>\n      <p>Platform: <b>iOS</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>_url</span> : String<div class='sub-desc'><p>The URL to share</p>\n</div></li></ul></div></div></div><div id='method-share' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='social'>social</span><br/></div><a href='#!/api/social-method-share' class='name expandable'>share</a>( <span class='pre'>_url, _view</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Opens the sharing menu\n\nNOTE: Minimum iOS 6 for ActivityView, otherwise fall back to Twitter and e-mail ...</div><div class='long'><p>Opens the sharing menu</p>\n\n<p><strong>NOTE: Minimum iOS 6 for ActivityView, otherwise fall back to Twitter and e-mail</strong></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>_url</span> : String<div class='sub-desc'><p>The URL to share</p>\n</div></li><li><span class='pre'>_view</span> : Object<div class='sub-desc'><p>[iOS only] The view to attach the OptionDialog to (required for iPad)</p>\n</div></li></ul></div></div></div><div id='method-shareActivityView' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='social'>social</span><br/></div><a href='#!/api/social-method-shareActivityView' class='name expandable'>shareActivityView</a>( <span class='pre'>_url, _view</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Opens the sharing menu for iOS 6+ users ...</div><div class='long'><p>Opens the sharing menu for iOS 6+ users</p>\n      <p>Platform: <b>iOS</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>_url</span> : String<div class='sub-desc'><p>The URL to share</p>\n</div></li><li><span class='pre'>_view</span> : Object<div class='sub-desc'><p>The view to attach the OptionDialog to (required for iPad)</p>\n</div></li></ul></div></div></div><div id='method-twitter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='social'>social</span><br/></div><a href='#!/api/social-method-twitter' class='name expandable'>twitter</a>( <span class='pre'>_url</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Shares information via Twitter ...</div><div class='long'><p>Shares information via Twitter</p>\n      <p>Platform: <b>iOS</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>_url</span> : String<div class='sub-desc'><p>The URL to share</p>\n</div></li></ul></div></div></div></div></div></div></div>","mixedInto":[],"autodetected":{},"name":"social","id":"class-social","parentMixins":[],"tagname":"class"});
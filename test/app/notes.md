this.resource('tree')

this.route('about')
this.resource('products')

a resource route has addl functionality

a model could be a js object or array of objects

ember route fetches data and passes to controller
decides which template to render to screen

Apps only have one router, which translates path into route

various routes provide data to controllers

route sits between router and controller - so router sends to route sends to controller

controller decorates the model, provides property values

Questions
Why is 'about' a route vs a resource?
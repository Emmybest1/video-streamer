### Styling Architecture

    For the styling, i used the BEM naming pattern

### For the Ui components

    I used parental-modularization(this is an architecture where logics are decoupled and invoked to a parent component when needed). Reason for this architecture is to enable efficient testing by simply practicing the DRY and SOC rule of clean coding

### For the redux structure

    I used a pattern called resource-modularization(this is a pattern where every resource have their types,actions and reducer nested inside their redux/resource-folder/....)

### For the question of persistance

    In my application, i used redux to control my store which persists across the lifecycle of the application with respect to lifecycle events which might have an effect on the current store state(which i explained via here sometimes ago https://stackoverflow.com/a/64674461/12099237). So in a nutshell, i will consider redux for persistence implementation.

### If you later decided to migrate to a microservices architecture, what kind of patterns would you use for this? No implementation needed.

    Per say, in my current company, i make use of docker in serving both our tcl and ui components and i will consider falling back to docker as a microservice architecture as a result of its ability to control projects and serve require images. In a nutshell, i would consider any modulraised patterns aka Decentralized governance.

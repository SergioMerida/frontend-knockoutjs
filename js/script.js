function AppViewModel() {
    this.artist = ko.observable("50 Cent");
    this.song = ko.observable("In da club");
    this.together = ko.computed(function(){
        return this.artist() + " " + this.song();
    }, this);
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());

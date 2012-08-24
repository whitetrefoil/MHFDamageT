// Generated by CoffeeScript 1.3.3
(function() {
  "use strict";

  var afterLoading, checkDataLoading, equips, isLoaded, items, loadData, loadEquips, loadItems, loadMonsters, loadWeaponTypes, monsters, weaponTypes;

  weaponTypes = [];

  equips = [];

  monsters = [];

  items = [];

  isLoaded = false;

  loadData = function() {
    loadWeaponTypes();
  };

  loadWeaponTypes = function() {
    return $.getJSON("data/weapon_types.json", function(data) {
      weaponTypes = data.weaponTypes;
      return checkDataLoading();
    });
  };

  loadEquips = function() {
    return $.getJSON("data/equips.json", function(data) {
      equips = data.equips;
      return checkDataLoading();
    });
  };

  loadMonsters = function() {
    return $.getJSON("data/monsters.json", function(data) {
      monsters = data.monsters;
      return checkDataLoading();
    });
  };

  loadItems = function() {
    return $.getJSON("data/items.json", function(data) {
      items = data.items;
      return checkDataLoading();
    });
  };

  checkDataLoading = function() {
    if (isLoaded) {
      return true;
    }
    try {
      if (!(weaponTypes && weaponTypes.length > 0)) {
        throw "weaponTypes";
      }
      isLoaded = true;
      afterLoading();
      return true;
    } catch (e) {
      return false;
    }
  };

  afterLoading = function() {
    console.log("Loading Completed.");
    return $("#nowLoading").animate({
      opacity: 0
    }, 1000, function() {
      return $(this).hide();
    });
  };

  $(function() {
    loadData();
  });

}).call(this);

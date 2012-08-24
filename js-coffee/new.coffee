# Main JS for new version

"use strict"

weaponTypes = []
equips = []
monsters = []
items = []
isLoaded = false

loadData = () ->
  loadWeaponTypes()
  #loadEquips()
  #loadMonsters()
  #loadItems()
  return

loadWeaponTypes = () ->
  $.getJSON "data/weapon_types.json", (data) ->
    weaponTypes = data.weaponTypes
    checkDataLoading()

loadEquips = () ->
  $.getJSON "data/equips.json", (data) ->
    equips = data.equips
    checkDataLoading()

loadMonsters = () ->
  $.getJSON "data/monsters.json", (data) ->
    monsters = data.monsters
    checkDataLoading()

loadItems = () ->
  $.getJSON "data/items.json", (data) ->
    items = data.items
    checkDataLoading()


# Check if all data has been loaded via Ajax
checkDataLoading = () ->
  return true if isLoaded
  try
    throw "weaponTypes" unless weaponTypes and weaponTypes.length > 0
    #throw "equips" unless equips and equips.length > 0
    #throw "monsters" unless monsters and monsters.length > 0
    #throw "items" unless items and items.length > 0
    isLoaded = true
    afterLoading()
    return true
  catch e
    return false

afterLoading = () ->
  console.log "Loading Completed."
  $("#nowLoading").animate({opacity:0}, 1000, -> $(this).hide())

$ ->
  loadData()
  return
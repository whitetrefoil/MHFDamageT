# Main JS for new version

"use strict"

weaponTypes = []

# Sword, Katana, etc.
class WeaponType
  # `@name:String`
  # `@text:Object`
  # `@isRange:Boolean`
  constructor: (@name, @text, @isRange = false) ->

  getWeaponClass: ->
    "#{@name}-prop"

  getRangeClass: ->
    if @isRange then "range-weapon-prop" else "close-weapon-prop"

  getClasses: ->
    [@getWeaponClass(), @getRangeClass()]

  getText: (lang) ->
    @text[lang]

class WeaponTypes
  constructor: (types) ->
    @types = []
    if types then @add(types)

  add: (types) ->
    if types instanceof WeaponType
      @types.push types
    else if types instanceof Array
      @types = @types.concat types

  length: ->
    @types.length


setWeaponTypes = (callback) ->
  $.getJSON "data/weapon_types.json", (data) ->
    for weaponType in data["weaponTypes"]
      weaponTypes.push(new WeaponType(weaponType["id"], weaponType["text"], weaponType["isRange"]))
    callback.call()


$ ->
  setWeaponTypes (data) ->
    console.log weaponTypes

  return
import DS from 'ember-data';

const { Model, attr, hasMany } = DS;

export default Model.extend({
  name: attr('string'),
  category: attr('string'),
  imageUrl: attr('string'),
  since: attr('string'),
  events: hasMany('event')
});

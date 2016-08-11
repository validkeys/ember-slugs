import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),

  slug: Ember.computed('title', function() {
    return `${this.get('id')}-${Ember.String.dasherize(this.get('title'))}`;
  })
});

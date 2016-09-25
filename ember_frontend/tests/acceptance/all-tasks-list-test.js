import { test } from 'qunit';
import moduleForAcceptance from 'ember-frontend/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | all tasks list');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});

test('should show the list of tasks', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(find('.task').length, 5, 'Should see 5 tasks');
  });
});

test('should show all the incomplete project tasks irrespective of whether it is assigned to a user', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(find('.task.incomplete').length, 5, 'Should see 5 incomplete tasks');
  });
});

test('should not show completed tasks', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(find('.task.completed').length, 0, 'Should not see completed tasks');
  });
});
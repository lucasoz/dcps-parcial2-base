import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    delete(post){
      const answer = confirm("Are you sure delete this post?");
      if (answer) {
        post.deleteRecord();
        post.get('isDeleted'); // => true
        post.save(); //

        this.transitioToRoute('authors.author', post.author);
      }
    }
  }
});

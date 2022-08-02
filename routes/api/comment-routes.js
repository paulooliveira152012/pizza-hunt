const router = require('express').Router();
const { addComment, removeComment } = require('../../controllers/comment-controller');

// /api/comments/<pizzaId> (POST)
router.route('/:pizzaId').post(addComment);

// /api/comments/<pizzaId>/<commentId> (DELETE)
router.route('/:pizzaId/:commentId').delete(removeComment);

module.exports = router;
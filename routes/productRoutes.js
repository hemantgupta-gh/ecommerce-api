const router = require('express').Router();
const auth = require('../middleware/authMiddleware');
const role = require('../middleware/roleMiddleware');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const {
    createCategory,
    createProduct,
    getProducts,
    updateProduct,
    deleteProduct,
    updateCategory,
    deleteCategory
} = require('../controllers/productController');

// Category routes
router.post('/category', auth, role('admin'), createCategory);
router.put('/category/:id', auth, role('admin'), updateCategory);
router.delete('/category/:id', auth, role('admin'), deleteCategory);

// Product routes
router.post('/', auth, role('admin'), upload.single('image'), createProduct);
router.get('/', getProducts);
router.put('/:id', auth, role('admin'), upload.single('image'), updateProduct);
router.delete('/:id', auth, role('admin'), deleteProduct);

module.exports = router;
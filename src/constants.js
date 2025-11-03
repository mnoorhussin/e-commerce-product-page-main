// Import product images
import image1 from '../public/images/image-product-1.jpg';
import image2 from '../public/images/image-product-2.jpg';
import image3 from '../public/images/image-product-3.jpg';
import image4 from '../public/images/image-product-4.jpg';
import thumb1 from '../public/images/image-product-1-thumbnail.jpg';
import thumb2 from '../public/images/image-product-2-thumbnail.jpg';
import thumb3 from '../public/images/image-product-3-thumbnail.jpg';
import thumb4 from '../public/images/image-product-4-thumbnail.jpg';

export const PRODUCT_DATA = {
  id: 1,
  company: 'Sneaker Company',
  name: 'Fall Limited Edition Sneakers',
  description: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they\'ll withstand everything the weather can offer.',
  price: 125.00,
  originalPrice: 250.00,
  discount: 50,
  images: [
    { id: 1, full: image1, thumbnail: thumb1 },
    { id: 2, full: image2, thumbnail: thumb2 },
    { id: 3, full: image3, thumbnail: thumb3 },
    { id: 4, full: image4, thumbnail: thumb4 },
  ],
};
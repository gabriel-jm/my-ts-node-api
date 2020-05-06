import Controller from '../../../core/abstract/Controller'
import ProductsCategoriesService from './ProductsCategoriesService'
import ProductsModel, { ProductCategory } from './ProductsCategories'
import { RequestContent } from '../../../core/types/interfaces'

const service = new ProductsCategoriesService()

class ProductsCategoriesController extends Controller<ProductCategory> {

  constructor(protected content: RequestContent) {
    super(content, service, ProductsModel)
  }

}

export default ProductsCategoriesController
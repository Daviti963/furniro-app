import ProductGrid from '@/src/features/products/components/ProductGrid/ProductGrid';
import Pagination from '@/src/components/ui/Pagination/Pagination';
import { getProductsByCategory } from '@/src/features/products/api/getProducts';
import { repeatProducts } from '@/src/features/products/utils/repeatProducts';
import { PRODUCTS_PER_PAGE, PRODUCTS_TOTAL } from '@/src/features/products/constants/constants';
import { paginate } from '@/src/utils/paginate';
import { parsePage } from '@/src/utils/parsePage';
import type { SearchParams } from '@/src/type/searchParms';

type ShopProductsProps = {
    searchParams: SearchParams;
}

export default async function ShopProducts({ searchParams }: ShopProductsProps) {
    const { page } = await searchParams;

    const products = await getProductsByCategory('furniture');
    const allProducts = repeatProducts(products, PRODUCTS_TOTAL);

    const totalPages = Math.ceil(allProducts.length / PRODUCTS_PER_PAGE);
    const currentPage = parsePage(page, totalPages);
    const visibleProducts = paginate(allProducts, currentPage, PRODUCTS_PER_PAGE);

    return (
        <>
            <ProductGrid products={visibleProducts} />
            <Pagination currentPage={currentPage} totalPages={totalPages} />
        </>
    )
}

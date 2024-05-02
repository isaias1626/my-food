import { Product } from "@prisma/client";
import { ArrowDownIcon } from "lucide-react";

interface DiscountBadgeProps {
    product: Pick<Product, "discountPercentage">
}

const DiscountBadge = ({product}: DiscountBadgeProps) => {
    return ( 
        <div className="gap-[2px] flex items-center top-2 left-2 bg-primary rounded-full py-[2px] px-2 text-white">
                <ArrowDownIcon size={12} />
            <span className='font-semibold text-xs'>
                {product.discountPercentage}%
            </span>
        </div>
    );
}

export default DiscountBadge;
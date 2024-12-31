import { useCallback } from "react";

import { RecipeItem } from "./mocks";

export default function RecipeTree({ item }: { item: RecipeItem } ) {
    const divider = useCallback((index: number, childNum: number) => {
        if (childNum === 1) return "h-[2px] w-[2px] mx-auto bg-gray-300"
        if (index === 0) return "h-[2px] w-[calc(50%+1px)] ml-auto bg-gray-300"
        if (index === childNum - 1) return "h-[2px] w-[calc(50%+1px)] mr-auto bg-gray-300"
        return "h-[2px] w-full mx-auto bg-gray-300"
    }, [])

    return (
      <div className="flex flex-col items-center">
        <img
            src={item.image}
            alt={item.name}
            className="w-12 h-12 border-2 border-gray-300"
        />
        {item.children && (
            <div>
                <div className="h-4 w-[2px] mx-auto bg-gray-300"></div>
                <div className="flex items-center">
                    {item.children.map((child, index) => (
                        <div className="mb-auto" key={index}>
                            <div className={divider(index, item.children?.length ?? 1)}></div>
                                <div className="h-3 w-[2px] mx-auto bg-gray-300"></div>
                                <div className="mx-2">
                                    <RecipeTree key={index} item={child} />
                                </div>
                        </div>
                    ))}
                </div>
            </div>
        )}
      </div>
    );
  };
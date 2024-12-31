import { titanicHydraRecipe, trinityForceRecipe, platedSteelcapsRecipe } from "@/components/mocks";

import Recipe from "@/components/recipe";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 justify-center min-w-screen min-h-screen p-3 pt-12">
      <Recipe item={trinityForceRecipe} />
      <Recipe item={titanicHydraRecipe} />
      <Recipe item={platedSteelcapsRecipe} />
    </div>
  );
}

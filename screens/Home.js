import React, {useState, Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
} from 'react-native';
import Card from '../shared/Card';
import AddRecipe from './AddRecipe';

export default function Home({navigation}) {
  const [recipes, setRecipes] = useState([
    {
      title: 'Pull Apart Easter Blossom Bread',
      rating: 4,
      description:
        'A rich eggy dough is twisted into pretty flowers, then filled with jam in this decadent Easter bread. Be sure to look at the pictures for how it is formed. Lemon curd is an option to replace the jam.',
      ingredients:
        '6 cups all-purpose flour, or more if needed (divided)\n' +
        '1 tablespoon rapid rise yeast\n' +
        '½ cup white sugar\n' +
        '¼ teaspoon salt\n' +
        '½ cup unsalted butter\n' +
        '1 ¾ cups milk\n' +
        '3 eggs, beaten\n' +
        '1 lemon, zested and juiced\n' +
        '1 egg yolk\n' +
        '1 tablespoon water\n' +
        '½ cup seedless raspberry jam\n' +
        "1 cup confectioners' sugar",
      steps:
        'Step 1\n' +
        'In a large bowl, whisk together 4 cups of flour, the yeast, white sugar, and salt. In a saucepan over low heat, melt the unsalted butter with the milk until the mixture is warm, about 110 degrees F (43 degrees C). Gradually whisk about 1/3 of the butter-milk mixture into the beaten eggs, then return the egg mixture back into the remaining milk mixture. Stir the lemon zest into the liquid ingredients (set aside lemon juice for later). Pour the liquid ingredients into the flour mixture, and stir until thoroughly combined.\n' +
        '\n' +
        'Step 2\n' +
        'Add enough flour to make a soft dough; turn the dough out onto a floured surface, and knead until smooth and elastic, 8 to 10 minutes. Place dough into an oiled bowl, and turn the dough around to cover surface lightly with oil. Cover the bowl with plastic wrap, and allow to rise in a warm place until doubled, about 1 hour. Punch down the dough, and allow to rest for 10 minutes.\n' +
        '\n' +
        'Step 3\n' +
        'Divide the dough in half, and roll each half into a round ball. On a floured surface, roll out a ball into a 12-inch circle. Place a drinking glass, face down, into the center of the circle to prevent cutting the dough too far into the center. Cut the dough with a knife, from the edge of the dough circle to the rim of the glass, into quarters. Cut each quarter into 5 narrow wedge-shaped strips. (Center of the dough is uncut.) Remove the drinking glass. There are 20 narrow wedge-shaped strips surrounding the uncut center of the dough.\n' +
        '\n' +
        'Step 4\n' +
        'Pick up two adjacent strips, and twist them together about 4 times; pinch the ends of the two pieces together at the top. Gently coil to form a rough flower shape. Arrange the round into the middle of the circle, where the drinking glass was.\n' +
        '\n' +
        'Step 5\n' +
        'Pick up two more adjacent strips, and twist and pinch them as before; coil them into a rough round, and arrange the new petal next to the center rosette. Repeat with remaining 16 strips, twisting and pinching them in twos, coiling and arranging them into 8 more petals around the center rosette. Finished bread has 9 petals surrounding the center round. Repeat steps with the second ball of dough to make two breads.\n' +
        '\n' +
        'Step 6\n' +
        'Grease a baking sheet, or line with parchment paper. Place the shaped breads onto the prepared baking sheet, reshaping them into rounds if needed; cover with a clean kitchen towel, and place into a warm spot to rise until almost doubled, 30 to 45 minutes.\n' +
        '\n' +
        'Step 7\n' +
        'Preheat oven to 375 degrees F (190 degrees C). Beat the egg yolk with water in a small bowl, and brush the mixture over both the breads.\n' +
        '\n' +
        'Step 8\n' +
        'Bake in the preheated oven until the breads have turned golden brown, about 25 minutes. Allow to cool.\n' +
        '\n' +
        'Step 9\n' +
        "Use your fingers to gently deepen the indentations in the center of each petal, and fill each with about 1/2 to 1 teaspoon of raspberry jam. Mix the reserved lemon juice and confectioners' sugar in a bowl to form a glaze; drizzle the glaze in thin lines all over both the breads. Allow glaze to set. To serve, pull the petals apart.",
      key: '1',
    },
    {
      title: 'Refreshing Lentil Salad',
      rating: 3,
      description: 'A light, earthy substitute for lunch',
      ingredients:
        '4 cups water \n' +
        'salt\n' +
        '1 1/4 cups dry lentils\n' +
        '2 large cloves garlic, minced\n' +
        '2 large roma (plum) tomatoes, seeded and chopped\n' +
        '1/2 cup chopped red onion\n' +
        '1/2 cup chopped green bell pepper\n' +
        '1 small green chile pepper, seeded and chopped\n' +
        '1 lemon, juiced\n' +
        '1 teaspoon lemon zest\n' +
        '1 small carrot, shredded\n' +
        '1/2 cup oil-cured black olives\n' +
        '1/4 cup chopped fresh cilantro\n' +
        'salt and ground black pepper to taste\n' +
        '1/4 cup extra-virgin olive oil\n' +
        '2 hard-cooked eggs, cut in half lengthwise',
      steps:
        'Step 1\n' +
        'Bring the water and salt to a boil in a saucepan over high heat. Pour the lentils into the water while stirring constantly. Reduce heat to low, cover, and simmer until the lentils are tender but still hold their shape, about 30 minutes. Drain well.\n' +
        'Step 2\n' +
        'Transfer the lentils to a mixing bowl and stir in the garlic, seeded tomatoes, red onion, green bell pepper, and chile pepper. Add the juice of 1 lemon plus 1 teaspoon of the zest. Mix in the shredded carrot, olives, and cilantro.\n' +
        'Step 3\n' +
        'Season with salt and black pepper, and drizzle with olive oil; mix well. Refrigerate for at least an hour to allow the flavors to blend.\n' +
        'Step 4\n' +
        'Before serving, mix the salad again and add more lemon juice or olive oil if needed. Transfer to a serving dish and garnish with sliced eggs.',
      key: '2',
    },
    {
      title: 'Worlds Best Lasagna',
      rating: 4,
      description: 'It takes a little work, but it is worth it.',
      ingredients:
        '1 pound sweet Italian sausage\n' +
        '¾ pound lean ground beef\n' +
        '½ cup minced onion\n' +
        '2 cloves garlic, crushed\n' +
        '1 (28 ounce) can crushed tomatoes\n' +
        '2 (6 ounce) cans tomato paste\n' +
        '2 (6.5 ounce) cans canned tomato sauce\n' +
        '½ cup water\n' +
        '2 tablespoons white sugar\n' +
        '1 ½ teaspoons dried basil leaves\n' +
        '½ teaspoon fennel seeds\n' +
        '1 teaspoon Italian seasoning\n' +
        '1 ½ teaspoons salt, divided, or to taste\n' +
        '¼ teaspoon ground black pepper\n' +
        '4 tablespoons chopped fresh parsley\n' +
        '12 lasagna noodles\n' +
        '16 ounces ricotta cheese\n' +
        '1 egg\n' +
        '¾ pound mozzarella cheese, sliced\n' +
        '¾ cup grated Parmesan cheese',
      steps:
        'Step 1\n' +
        'In a Dutch oven, cook sausage, ground beef, onion, and garlic over medium heat until well browned. Stir in crushed tomatoes, tomato paste, tomato sauce, and water. Season with sugar, basil, fennel seeds, Italian seasoning, 1 teaspoon salt, pepper, and 2 tablespoons parsley. Simmer, covered, for about 1 1/2 hours, stirring occasionally.\n' +
        '\n' +
        'Step 2\n' +
        'Bring a large pot of lightly salted water to a boil. Cook lasagna noodles in boiling water for 8 to 10 minutes. Drain noodles, and rinse with cold water. In a mixing bowl, combine ricotta cheese with egg, remaining parsley, and 1/2 teaspoon salt.\n' +
        '\n' +
        'Step 3\n' +
        'Preheat oven to 375 degrees F (190 degrees C).\n' +
        '\n' +
        'Step 4\n' +
        'To assemble, spread 1 1/2 cups of meat sauce in the bottom of a 9x13 inch baking dish. Arrange 6 noodles lengthwise over meat sauce. Spread with one half of the ricotta cheese mixture. Top with a third of mozzarella cheese slices. Spoon 1 1/2 cups meat sauce over mozzarella, and sprinkle with 1/4 cup Parmesan cheese. Repeat layers, and top with remaining mozzarella and Parmesan cheese. Cover with foil: to prevent sticking, either spray foil with cooking spray, or make sure the foil does not touch the cheese.\n' +
        '\n' +
        'Step 5\n' +
        'Bake in preheated oven for 25 minutes. Remove foil, and bake an additional 25 minutes. Cool for 15 minutes before serving.',
      key: '3',
    },
    {
      title: 'Lemon Meringue Cheesecake',
      rating: 5,
      description:
        'Love lemon meringue pie and cheesecake? Well this is the best of both worlds. Great any time of year and sure to impress your guests',
      ingredients:
        ' cups shortbread cookie crumbs\n' +
        '¼ cup melted butter\n' +
        '3 (8 ounce) packages cream cheese, softened\n' +
        '1 cup sour cream\n' +
        '1 cup white sugar\n' +
        '4 eggs\n' +
        '¼ cup fresh lemon juice\n' +
        '1 teaspoon vanilla extract\n' +
        '1 lemon, zested\n' +
        '4 egg whites\n' +
        '¼ cup white sugar\n' +
        '¼ teaspoon cream of tartar (optional)\n' +
        '1 ½ cups lemon curd',
      steps:
        'Step 1\n' +
        'Preheat oven to 325 degrees F (165 degrees C).\n' +
        '\n' +
        'Step 2\n' +
        'Mix cookie crumbs and melted butter together in a bowl until evenly combined; press into the bottom of a 9-inch springform pan.\n' +
        '\n' +
        'Step 3\n' +
        'Beat cream cheese, sour cream, and 1 cup sugar together in a bowl using an electric mixer until smooth and creamy. Add eggs one at a time, beating well after each addition. Mix lemon juice, vanilla extract, and lemon zest into cream cheese mixture, scraping bottom and sides of the bowl. Spread mixture over cookie crust in the springform pan.\n' +
        '\n' +
        'Step 4\n' +
        'Bake in the preheated oven until almost set in the center, about 1 hour. Cool to room temperature and refrigerate until completely cooled, at least 3 to 4 hours.\n' +
        '\n' +
        'Step 5\n' +
        'Preheat oven to 375 degrees F (190 degrees C).\n' +
        '\n' +
        'Step 6\n' +
        'Beat egg whites in a bowl using an electric mixer until soft peaks form; add 1/4 cup sugar and cream of tartar and beat until stiff, but not dry, peaks form.\n' +
        '\n' +
        'Step 7\n' +
        'Spread lemon curd over cheesecake. Mound whipped egg whites over the curd, sealing around all the edges.\n' +
        '\n' +
        'Step 8\n' +
        'Bake in the preheated oven until meringue is golden brown, about 10 minutes. Chill uncovered in refrigerator, about 1 hour.',
      key: '4',
    },
    {
      title: 'Rich Banana Bread',
      rating: 5,
      description: 'Melt in your mouth AMAZING!',
      ingredients:
        '1/2 cup butter melted\n' +
        '1 cup white sugar\n' +
        '2 eggs\n' +
        '1 teaspoon vanilla extract\n' +
        '1 1/2 cups all-purpose flour\n' +
        '1 teaspoon baking soda\n' +
        '1/2 teaspoon salt\n' +
        '1/2 cup sour cream\n' +
        '1/2 cup chopped walnuts\n' +
        '2 medium bananas, sliced',
      steps:
        'Step 1\n' +
        'Preheat oven to 350 degrees F (175 degrees C). Grease a 9x5 inch loaf pan.\n' +
        'Step 2\n' +
        'In a large bowl, stir together the melted butter and sugar. Add the eggs and vanilla, mix well. Combine the flour, baking soda and salt, stir into the butter mixture until smooth. Finally, fold in the sour cream, walnuts and bananas. Spread evenly into the prepared pan.\n' +
        'Step 3\n' +
        'Bake at 350 degrees F (175 degrees C) for 60 minutes, or until a toothpick inserted into the center of the loaf comes out clean. Cool loaf in the pan for 10 minutes before removing to a wire rack to cool completely.',
      key: '5',
    },
    {
      title: 'Creamy Cajun Chicken Pasta',
      rating: 4,
      description:
        'Try this when you are feeling daring and want to mix things up a bit! A Southern inspired recipe that is sure to add a little fun to your dinner table. Try serving it with corn bread.',
      ingredients:
        '4 ounces linguine pasta\n' +
        '2 boneless, skinless chicken breast halves, sliced into thin strips\n' +
        '2 teaspoons Cajun seasoning\n' +
        '2 tablespoons butter\n' +
        '1 green bell pepper, chopped\n' +
        '½ red bell pepper, chopped\n' +
        '4 fresh mushrooms, sliced\n' +
        '1 green onion, minced\n' +
        '1 ½ cups heavy cream\n' +
        '¼ teaspoon dried basil\n' +
        '¼ teaspoon lemon pepper\n' +
        '¼ teaspoon salt\n' +
        '⅛ teaspoon garlic powder\n' +
        '⅛ teaspoon ground black pepper\n' +
        '2 tablespoons grated Parmesan cheese\n',
      steps:
        'Step 1\n' +
        'Bring a large pot of lightly salted water to a boil. Add linguini pasta, and cook for 8 to 10 minutes, or until al dente; drain.\n' +
        '\n' +
        'Step 2\n' +
        'Meanwhile, place chicken and Cajun seasoning in a bowl, and toss to coat.\n' +
        '\n' +
        'Step 3\n' +
        'In a large skillet over medium heat, saute chicken in butter until no longer pink and juices run clear, about 5 to 7 minutes. Add green and red bell peppers, sliced mushrooms and green onions; cook for 2 to 3 minutes. Reduce heat, and stir in heavy cream. Season the sauce with basil, lemon pepper, salt, garlic powder and ground black pepper, and heat through.\n' +
        '\n' +
        'Step 4\n' +
        'In a large bowl, toss linguini with sauce. Sprinkle with grated Parmesan cheese.',
      key: '6',
    },
    {
      title: 'Sweetheart Cupcakes',
      rating: 5,
      description:
        "Instead of just plain white cupcakes, I took it a step further and made them special. You can change the colors for any holiday. Shades of green for St. Patrick's Day, pastel colors for Easter, red white and blue for the 4th of July. You get the picture.",
      ingredients:
        '1 (18.25 ounce) package white cake mix\n' +
        '1 ¼ cups water\n' +
        '⅓ cup vegetable oil\n' +
        '3 egg whites\n' +
        '8 drops red food coloring\n' +
        '2 drops raspberry candy oil',
      steps:
        'Step 1\n' +
        'Preheat an oven to 350 degrees F (175 degrees C). Line a standard muffin tin with paper cupcake liners.\n' +
        '\n' +
        'Step 2\n' +
        'Beat the cake mix, water, vegetable oil, and egg whites together on low speed for 30 seconds, then on medium for 2 minutes, until smooth. Fill cupcake liners 1/3 full with white batter; set aside.\n' +
        '\n' +
        'Step 3\n' +
        'Stir 4 drops of red food coloring into the remaining bowl of batter to make the batter pink, stir in the raspberry oil. Pour 1/3 of pink batter into a resealable plastic bag and set aside.\n' +
        '\n' +
        'Step 4\n' +
        'Mix more food coloring into the remaining bowl of pink batter until it is an orange/red color and pour the batter into a resealable plastic bag. Cut a corner off the bag, stick the open tip into the center of each cup of white batter and squeeze in about two tablespoons of red batter.\n' +
        '\n' +
        'Step 5\n' +
        'Cut the corner off the bag with the pink batter, stick the open tip into the center of the red batter and squeeze about 1 tablespoon pink batter into each cup.\n' +
        '\n' +
        'Step 6\n' +
        'Bake the layered cupcakes in the preheated oven until a toothpick inserted into the center comes out clean, 15 to 20 minutes. Cool completely before frosting.',
      key: '7',
    },
    {
      title: 'Scrambled Eggs with Zucchini',
      rating: 4,
      description: 'Quick, Easy, Tasty!',
      ingredients:
        '4 eggs, lightly beaten\n' +
        '2 tablespoons grated Parmesan cheese\n' +
        '2 tablespoons olive oil\n' +
        '1 zucchini, sliced 1/8- to 1/4-inch thick\n' +
        'garlic powder, or to taste\n' +
        'salt and ground black pepper to taste',
      steps:
        'Step 1\n' +
        'Preheat oven to 350 degrees F (175 degrees C). Grease a 9x5 inch loaf pan.\n' +
        'Step 2\n' +
        'In a large bowl, stir together the melted butter and sugar. Add the eggs and vanilla, mix well. Combine the flour, baking soda and salt, stir into the butter mixture until smooth. Finally, fold in the sour cream, walnuts and bananas. Spread evenly into the prepared pan.\n' +
        'Step 3\n' +
        'Bake at 350 degrees F (175 degrees C) for 60 minutes, or until a toothpick inserted into the center of the loaf comes out clean. Cool loaf in the pan for 10 minutes before removing to a wire rack to cool completely.',
      key: '8',
    },
    {
      title: 'Sweet Restaurant Slaw',
      rating: 3,
      description: 'Tastes just like cole slaw served with fried chicken!',
      ingredients:
        '1 (16 ounce) bag coleslaw mix\n' +
        '2 tablespoons diced onion\n' +
        '2/3 cup creamy salad dressing (such as Miracle Whip™)\n' +
        '3 tablespoons vegetable oil\n' +
        '1/2 cup white sugar\n' +
        '1 tablespoon white vinegar\n' +
        '1/4 teaspoon salt\n' +
        '1/2 teaspoon poppy seeds',
      steps:
        'Step 1\n' +
        'Combine the coleslaw mix and onion in a large bowl.\n' +
        'Step 2\n' +
        'Whisk together the salad dressing, vegetable oil, sugar, vinegar, salt, and poppy seeds in a medium bowl; blend thoroughly. Pour dressing mixture over coleslaw mix and toss to coat. Chill at least 2 hours before serving.',
      key: '9',
    },
    {
      title: 'Quinoa Black Bean Burgers',
      rating: 5,
      description: 'Oooooo YUM!',
      ingredients:
        '1 (15 ounce) can black beans, rinsed and drained\n' +
        '1/4 cup quinoa\n' +
        '1/2 cup water\n' +
        '1/2 cup bread crumbs\n' +
        '1/4 cup minced yellow bell pepper\n' +
        '2 tablespoons minced onion\n' +
        '1 large clove garlic, minced\n' +
        '1 1/2 teaspoons ground cumin\n' +
        '1/2 teaspoon salt\n' +
        "1 teaspoon hot pepper sauce (such as Frank's RedHot®)\n" +
        '1 egg\n' +
        '3 tablespoons olive oil',
      steps:
        'Step 1\n' +
        'Bring the quinoa and water to a boil in a saucepan. Reduce heat to medium-low, cover, and simmer until the quinoa is tender and the water has been absorbed, about 15 to 20 minutes.\n' +
        'Step 2\n' +
        'Roughly mash the black beans with a fork leaving some whole black beans in a paste-like mixture.\n' +
        'Step 3\n' +
        'Mix the quinoa, bread crumbs, bell pepper, onion, garlic, cumin, salt, hot pepper sauce, and egg into the black beans using your hands.\n' +
        'Step 4\n' +
        'Form the black bean mixture into 5 patties.\n' +
        'Step 5\n' +
        'Heat the olive oil in a large skillet.\n' +
        'Step 6\n' +
        'Cook the patties in the hot oil until heated through, 2 to 3 minutes per side.',
      key: '10',
    },
    {
      title: 'Strawberry Angel Food Dessert',
      rating: 4,
      description: 'Sent from Above!',
      ingredients:
        '1 (10 inch) angel food cake\n' +
        '2 (8 ounce) packages cream cheese, softened\n' +
        '1 cup white sugar\n' +
        '1 (8 ounce) container frozen whipped topping, thawed\n' +
        '1 quart fresh strawberries, sliced\n' +
        '1 (18 ounce) jar strawberry glaze',
      steps:
        'Step 1\n' +
        'Crumble the cake into a 9x13 inch dish.\n' +
        'Step2\n' +
        'Beat the cream cheese and sugar in a medium bowl until light and fluffy. Fold in whipped topping. Mash the cake down with your hands and spread the cream cheese mixture over the cake.\n' +
        'Step 3\n' +
        'In a bowl, combine strawberries and glaze until strawberries are evenly coated. Spread over cream cheese layer. Chill until serving.',
      key: '11',
    },
    {
      title: 'Tiramisu Toffee Dessert',
      rating: 5,
      description:
        'This is a nice version of the popular Italian pick-me-up dessert. The toffee candy in this recipe adds a delightful crunchiness to the smooth creamy whipped cream quality of an already perfect dessert',
      ingredients:
        '1 (10.75 ounce) package frozen prepared pound cake, thawed and cut into 9 slices\n' +
        '3/4 cup strong brewed coffee\n' +
        '1 (8 ounce) package cream cheese\n' +
        '1 cup white sugar\n' +
        '1/2 cup chocolate syrup\n' +
        '2 cups heavy whipping cream\n' +
        '2 (1.4 ounce) bars chocolate covered English toffee, chopped',
      steps:
        'Step 1\n' +
        'Arrange cake slices on bottom of a rectangular 11x7 inch baking dish, cutting cake slices if necessary to fit the bottom of the dish. Drizzle coffee over cake.\n' +
        'Step 2\n' +
        'Beat cream cheese, sugar, and chocolate syrup, in a large bowl with an electric mixer on medium speed until smooth. Add heavy cream; beat on medium speed until light and fluffy. Spread over cake. Sprinkle with chocolate-covered toffee candy.\n' +
        'Step 3\n' +
        'Cover and refrigerate for at least 1 hour, but no longer than 24 hours, to set dessert and blend flavors.',
      key: '12',
    },
    {
      title: 'Crustless Spinach Quiche',
      rating: 4,
      description:
        'I serve this in the summer for brunch with a side of sausage links and a fresh fruit bowl!',
      ingredients:
        '1 tablespoon vegetable oil\n' +
        '1 onion, chopped\n' +
        '1 (10 ounce) package frozen chopped spinach, thawed and drained\n' +
        '5 eggs, beaten\n' +
        '3 cups shredded Muenster cheese\n' +
        '1/4 teaspoon salt\n' +
        '1/8 teaspoon ground black pepper',
      steps:
        'Step 1\n' +
        'Preheat oven to 350 degrees F (175 degrees C). Lightly grease a 9 inch pie pan.\n' +
        'Step 2\n' +
        'Heat oil in a large skillet over medium-high heat. Add onions and cook, stirring occasionally, until onions are soft. Stir in spinach and continue cooking until excess moisture has evaporated.\n' +
        'Step 3\n' +
        'In a large bowl, combine eggs, cheese, salt and pepper. Add spinach mixture and stir to blend. Scoop into prepared pie pan.\n' +
        'Step 4\n' +
        'Bake in preheated oven until eggs have set, about 30 minutes. Let cool for 10 minutes before serving.',
      key: '13',
    },
    {
      title: 'Fluffy French Toast',
      rating: 4,
      description:
        "This French toast recipe is different because it uses flour. I have given it to some friends and they've all liked it better than the French toast they usually make!",
      ingredients:
        '1/4 cup all-purpose flour\n' +
        '1 cup milk\n' +
        '1 pinch salt\n' +
        '3 eggs\n' +
        '1/2 teaspoon ground cinnamon\n' +
        '1 teaspoon vanilla extract\n' +
        '1 tablespoon white sugar\n' +
        '12 thick slices bread',
      steps:
        'Step 1\n' +
        'Measure flour into a large mixing bowl. Slowly whisk in the milk. Whisk in the salt, eggs, cinnamon, vanilla extract and sugar until smooth.\n' +
        'Step 2\n' +
        'Heat a lightly oiled griddle or frying pan over medium heat.\n' +
        'Step 3\n' +
        'Soak bread slices in mixture until saturated. Cook bread on each side until golden brown. Serve hot.',
      key: '14',
    },
    {
      title: 'Grilled Salmon ',
      rating: 5,
      description:
        'A simple soy sauce and brown sugar marinade, with hints of lemon and garlic, are the perfect salty-sweet complement to rich salmon fillets. Even my 9 year old loves this recipe!',
      ingredients:
        '1 1/2 pounds salmon fillets\n' +
        'lemon pepper to taste\n' +
        'garlic powder to taste\n' +
        'salt to taste\n' +
        '1/3 cup soy sauce\n' +
        '1/3 cup brown sugar\n' +
        '1/3 cup water\n' +
        '1/4 cup vegetable oil',
      steps:
        'Step 1\n' +
        'Season salmon fillets with lemon pepper, garlic powder, and salt.\n' +
        'Step 2\n' +
        'In a small bowl, stir together soy sauce, brown sugar, water, and vegetable oil until sugar is dissolved. Place fish in a large resealable plastic bag with the soy sauce mixture, seal, and turn to coat. Refrigerate for at least 2 hours.\n' +
        'Step 3\n' +
        'Preheat grill for medium heat.\n' +
        'Step 4\n' +
        'Lightly oil grill grate. Place salmon on the preheated grill, and discard marinade. Cook salmon for 6 to 8 minutes per side, or until the fish flakes easily with a fork.',
      key: '15',
    },
  ]);
  const addRecipe = recipe => {
    recipe.key = Math.random().toString();
    setRecipes(currentRecipes => {
      return [recipe, ...currentRecipes];
    });
    setModalOpen(false);
  };

  const [modalOpen, setModalOpen] = useState(false);
  return (
    <View style={styles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setModalOpen(false)}>
              <Text style={styles.buttonText}>X</Text>
            </TouchableOpacity>
            <AddRecipe addRecipe={addRecipe} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalOpen(true)}>
        <Text style={styles.buttonText}>+ Add Recipe</Text>
      </TouchableOpacity>
      <SafeAreaView>
        <FlatList
          scrollEnabled
          data={recipes}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Recipe', item)}>
              <Card>
                <Text style={styles.cardTitles}>{item.title}</Text>
              </Card>
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'maroon',
    padding: 10,
    marginLeft: 100,
    marginRight: 100,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  cardTitles: {
    fontSize: 18,
  },
});

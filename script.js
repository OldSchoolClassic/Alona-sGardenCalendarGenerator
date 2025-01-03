// Plant Data
const plants = [
    {
        id: 1,
        name: 'Artichoke',
        description: 'Start indoors. Thrives in well-drained soil with full sun.',
        plantingZone: 'Zones 7-11',
        optimalPlantingDate: 'January 13 - February 13',
        growthSeason: '90-120 days',
        sunlight: 'Full Sun',
        watering: 'Moderate, keep soil consistently moist.',
        soilType: 'Rich, well-drained soil',
        fertilization: 'Fertilize every 2-3 weeks with balanced fertilizer.',
        pruning: 'Remove dead leaves regularly.',
        pests: 'Aphids, snails. Use neem oil for prevention.',
        harvesting: 'Harvest when buds are firm and closed.',
        storage: 'Store in a cool, dry place for up to a week.',
        companionPlants: 'Peas, Sunflowers. Avoid Onions.',
        varieties: 'Green Globe, Purple of Romagna',
    },
    {
        id: 2,
        name: 'Asparagus',
        description: 'Start indoors. Plant crowns in well-drained soil.',
        plantingZone: 'Zones 3-8',
        optimalPlantingDate: 'February 8 - March 8',
        growthSeason: '2-3 years for full maturity',
        sunlight: 'Full Sun',
        watering: '1-2 inches of water per week.',
        soilType: 'Sandy, well-drained soil',
        fertilization: 'Fertilize in early spring and midsummer.',
        pruning: 'Cut back in late fall after foliage dies.',
        pests: 'Asparagus beetles. Handpick or use insecticidal soap.',
        harvesting: 'Harvest spears in the second or third year.',
        storage: 'Keep in the fridge, upright in water.',
        companionPlants: 'Tomatoes, Parsley. Avoid Garlic.',
        varieties: 'Mary Washington, Jersey Knight',
    },
    {
        id: 3,
        name: 'Genovese Basil',
        description: 'Start indoors. Thrives in warm, sunny environments.',
        plantingZone: 'Zones 4-10',
        optimalPlantingDate: 'March 15 - April 15',
        growthSeason: '60-90 days',
        sunlight: 'Full Sun',
        watering: 'Keep soil consistently moist but not waterlogged.',
        soilType: 'Rich, well-drained soil',
        fertilization: 'Fertilize every 2 weeks with a balanced fertilizer.',
        pruning: 'Pinch back to promote bushy growth.',
        pests: 'Aphids, spider mites. Use neem oil or insecticidal soap.',
        harvesting: 'Harvest leaves regularly to encourage growth.',
        storage: 'Refrigerate fresh leaves or dry for long-term use.',
        companionPlants: 'Tomatoes, Peppers. Avoid Rue.',
        varieties: 'Italian Large Leaf, Sweet Genovese',
    },
    {
        id: 4,
        name: 'Purple Basil',
        description: 'Start indoors. Known for its striking purple leaves.',
        plantingZone: 'Zones 4-10',
        optimalPlantingDate: 'March 20 - April 20',
        growthSeason: '60-90 days',
        sunlight: 'Full Sun',
        watering: 'Water consistently; avoid letting the soil dry out.',
        soilType: 'Rich, well-drained soil',
        fertilization: 'Fertilize every 2 weeks with an organic fertilizer.',
        pruning: 'Pinch off flowers to extend leaf production.',
        pests: 'Aphids, slugs. Use companion planting or organic deterrents.',
        harvesting: 'Pick leaves as needed for culinary use.',
        storage: 'Refrigerate fresh leaves or freeze for preservation.',
        companionPlants: 'Tomatoes, Oregano. Avoid Rue.',
        varieties: 'Dark Opal, Red Rubin',
    },
    {
        id: 5,
        name: 'Sacred Basil',
        description: 'Start indoors. Valued for its medicinal properties.',
        plantingZone: 'Zones 5-10',
        optimalPlantingDate: 'April 1 - May 1',
        growthSeason: '70-100 days',
        sunlight: 'Full Sun to Partial Shade',
        watering: 'Keep soil evenly moist; do not overwater.',
        soilType: 'Loamy, well-drained soil',
        fertilization: 'Feed every 3 weeks with compost or organic fertilizer.',
        pruning: 'Pinch back to prevent flowering and encourage growth.',
        pests: 'Minimal pest issues; occasionally affected by aphids.',
        harvesting: 'Harvest leaves as needed; flowers can also be used.',
        storage: 'Dry leaves for teas or store fresh in a refrigerator.',
        companionPlants: 'Chamomile, Lavender.',
        varieties: 'Rama Tulsi, Krishna Tulsi',
    },
    {
        id: 6,
        name: 'Banana Pepper',
        description: 'Start indoors. Produces sweet, tangy peppers.',
        plantingZone: 'Zones 3-10',
        optimalPlantingDate: 'March 1 - April 1',
        growthSeason: '60-80 days',
        sunlight: 'Full Sun',
        watering: 'Water regularly; avoid letting the soil dry out.',
        soilType: 'Rich, well-drained soil',
        fertilization: 'Fertilize every 2 weeks with balanced fertilizer.',
        pruning: 'Remove lower leaves to promote air circulation.',
        pests: 'Aphids, spider mites. Use neem oil for prevention.',
        harvesting: 'Harvest when peppers are 4-6 inches long.',
        storage: 'Store in the refrigerator for up to 10 days.',
        companionPlants: 'Tomatoes, Basil. Avoid Fennel.',
        varieties: 'Sweet Banana, Hungarian Yellow Wax',
    },
    {
        id: 7,
        name: 'Carentan Leek',
        description: 'Start indoors. A hardy, flavorful leek.',
        plantingZone: 'Zones 3-9',
        optimalPlantingDate: 'February 20 - March 15',
        growthSeason: '80-120 days',
        sunlight: 'Full Sun',
        watering: 'Keep soil consistently moist.',
        soilType: 'Loamy, fertile soil',
        fertilization: 'Fertilize every 3 weeks with a nitrogen-rich fertilizer.',
        pruning: 'No pruning needed; mound soil around stalks as they grow.',
        pests: 'Leek moth, onion fly. Use row covers for protection.',
        harvesting: 'Harvest when stalks are thick and firm.',
        storage: 'Store in the refrigerator for up to 2 weeks.',
        companionPlants: 'Carrots, Celery. Avoid Beans.',
        varieties: 'American Flag, King Richard',
    },
    {
        id: 8,
        name: 'Scarlet Gogi Berry',
        description: 'Start indoors. Produces nutrient-rich berries.',
        plantingZone: 'Zones 5-9',
        optimalPlantingDate: 'March 15 - April 15',
        growthSeason: '90-120 days',
        sunlight: 'Full Sun',
        watering: 'Moderate; avoid overwatering.',
        soilType: 'Loamy, well-drained soil',
        fertilization: 'Fertilize in spring with compost or balanced fertilizer.',
        pruning: 'Prune annually to remove deadwood.',
        pests: 'Minimal pest issues; occasionally affected by aphids.',
        harvesting: 'Harvest when berries are bright red.',
        storage: 'Dry or refrigerate berries for preservation.',
        companionPlants: 'Elderberry, Mint.',
        varieties: 'Phoenix Tears, Crimson Star',
    },
    {
        id: 9,
        name: 'Yellow Sweet Spanish Onion',
        description: 'Start indoors. Produces large, sweet onions.',
        plantingZone: 'Zones 3-9',
        optimalPlantingDate: 'February 1 - February 20',
        growthSeason: '90-110 days',
        sunlight: 'Full Sun',
        watering: 'Moderate; ensure even moisture.',
        soilType: 'Loamy, well-drained soil',
        fertilization: 'Fertilize with nitrogen-rich fertilizer every 2 weeks.',
        pruning: 'No pruning needed.',
        pests: 'Onion fly, thrips. Use insecticidal soap if needed.',
        harvesting: 'Harvest when tops fall over and begin to dry.',
        storage: 'Cure in a dry place for 2-3 weeks before storage.',
        companionPlants: 'Carrots, Lettuce. Avoid Peas.',
        varieties: 'Walla Walla, Texas Early Grano',
    },
    {
        id: 10,
        name: 'Jimmy Nardello Italian Pepper',
        description: 'Start indoors. Produces sweet red peppers ideal for frying.',
        plantingZone: 'Zones 4-10',
        optimalPlantingDate: 'March 1 - April 1',
        growthSeason: '70-90 days',
        sunlight: 'Full Sun',
        watering: 'Keep soil consistently moist.',
        soilType: 'Loamy, well-drained soil',
        fertilization: 'Fertilize every 2 weeks with a balanced fertilizer.',
        pruning: 'Prune to encourage bushier growth and air circulation.',
        pests: 'Aphids, whiteflies. Use neem oil or insecticidal soap.',
        harvesting: 'Harvest when peppers are bright red and firm.',
        storage: 'Refrigerate fresh peppers for up to 10 days.',
        companionPlants: 'Basil, Carrots. Avoid Fennel.',
        varieties: 'Jimmy Nardello Original',
    },
    {
        id: 11,
        name: 'Datil Pepper',
        description: 'Start indoors. Known for its unique sweet and spicy flavor.',
        plantingZone: 'Zones 9-11',
        optimalPlantingDate: 'February 15 - March 15',
        growthSeason: '100-120 days',
        sunlight: 'Full Sun',
        watering: 'Water consistently; avoid overwatering.',
        soilType: 'Rich, sandy loam',
        fertilization: 'Apply compost or balanced fertilizer every 3 weeks.',
        pruning: 'Remove lower leaves to improve air circulation.',
        pests: 'Aphids, spider mites. Use companion planting or insecticidal soap.',
        harvesting: 'Harvest when peppers turn yellow-orange.',
        storage: 'Store fresh in the refrigerator or dry for long-term use.',
        companionPlants: 'Onions, Garlic. Avoid Beans.',
        varieties: 'St. Augustine Datil',
    },
    {
        id: 12,
        name: 'Rosemary',
        description: 'Perennial herb with fragrant, needle-like leaves.',
        plantingZone: 'Zones 7-10',
        optimalPlantingDate: 'March 20 - April 20',
        growthSeason: 'Year-round in warm climates',
        sunlight: 'Full Sun',
        watering: 'Low; allow soil to dry between watering.',
        soilType: 'Sandy, well-drained soil',
        fertilization: 'Fertilize sparingly in spring and summer.',
        pruning: 'Prune regularly to maintain shape and encourage growth.',
        pests: 'Aphids, spider mites. Rarely affected in optimal conditions.',
        harvesting: 'Cut stems as needed; avoid overharvesting.',
        storage: 'Dry sprigs for long-term use or store fresh in the fridge.',
        companionPlants: 'Sage, Thyme. Avoid Mint.',
        varieties: 'Tuscan Blue, Arp',
    },
    {
        id: 13,
        name: 'Txorixero Pepper',
        description: 'Start indoors. Traditional pepper used in Basque cuisine.',
        plantingZone: 'Zones 4-10',
        optimalPlantingDate: 'March 10 - April 10',
        growthSeason: '75-100 days',
        sunlight: 'Full Sun',
        watering: 'Moderate; do not let soil dry out completely.',
        soilType: 'Rich, well-drained soil',
        fertilization: 'Fertilize with a balanced fertilizer every 2 weeks.',
        pruning: 'Prune lower branches to encourage fruit production.',
        pests: 'Aphids, thrips. Use insecticidal soap as needed.',
        harvesting: 'Harvest when peppers are bright red and glossy.',
        storage: 'Store in a cool, dry place or refrigerate.',
        companionPlants: 'Tomatoes, Basil. Avoid Fennel.',
        varieties: 'Txorixero Original',
    },
    {
        id: 14,
        name: 'Ozark Giant Pepper',
        description: 'Start indoors. Large, sweet bell peppers perfect for stuffing.',
        plantingZone: 'Zones 3-10',
        optimalPlantingDate: 'March 15 - April 15',
        growthSeason: '75-90 days',
        sunlight: 'Full Sun',
        watering: 'Consistent; keep soil evenly moist.',
        soilType: 'Loamy, nutrient-rich soil',
        fertilization: 'Apply a balanced fertilizer every 3 weeks.',
        pruning: 'Remove suckers to direct energy to fruit production.',
        pests: 'Aphids, flea beetles. Use row covers for protection.',
        harvesting: 'Harvest when peppers are fully green and firm.',
        storage: 'Store fresh in the refrigerator for up to 10 days.',
        companionPlants: 'Basil, Carrots. Avoid Brassicas.',
        varieties: 'Ozark Giant Original',
    },
    {
        id: 15,
        name: 'Numex Easter Ornamental Pepper',
        description: 'Start indoors. Produces colorful, ornamental peppers.',
        plantingZone: 'Zones 4-10',
        optimalPlantingDate: 'March 10 - April 10',
        growthSeason: '70-90 days',
        sunlight: 'Full Sun',
        watering: 'Moderate, keep soil evenly moist.',
        soilType: 'Well-drained, fertile soil',
        fertilization: 'Apply a balanced fertilizer every 2 weeks.',
        pruning: 'Minimal pruning required; remove spent flowers.',
        pests: 'Aphids, spider mites. Use neem oil if needed.',
        harvesting: 'Harvest when peppers reach their full color.',
        storage: 'Best used fresh; can be dried for long-term storage.',
        companionPlants: 'Tomatoes, Marigolds. Avoid Potatoes.',
        varieties: 'Numex Easter Original',
    },
    {
        id: 16,
        name: 'Ozark Pink Tomato',
        description: 'Start indoors. Produces sweet, pink-hued tomatoes.',
        plantingZone: 'Zones 4-10',
        optimalPlantingDate: 'March 15 - April 15',
        growthSeason: '75-85 days',
        sunlight: 'Full Sun',
        watering: 'Water deeply and regularly.',
        soilType: 'Loamy, nutrient-rich soil',
        fertilization: 'Apply tomato-specific fertilizer every 2 weeks.',
        pruning: 'Prune suckers to focus growth on fruit production.',
        pests: 'Tomato hornworm, aphids. Use companion planting or organic sprays.',
        harvesting: 'Harvest when tomatoes are pink and firm.',
        storage: 'Store at room temperature for up to a week.',
        companionPlants: 'Basil, Marigold. Avoid Brassicas.',
        varieties: 'Ozark Pink Original',
    },
    {
        id: 17,
        name: 'White Currant Tomato',
        description: 'Start indoors. Small, sweet white tomatoes.',
        plantingZone: 'Zones 4-10',
        optimalPlantingDate: 'March 15 - April 15',
        growthSeason: '70-80 days',
        sunlight: 'Full Sun',
        watering: 'Keep soil consistently moist.',
        soilType: 'Rich, well-drained soil',
        fertilization: 'Fertilize every 2 weeks with a high-potassium fertilizer.',
        pruning: 'Pinch off suckers to enhance fruit yield.',
        pests: 'Whiteflies, spider mites. Use organic pest control methods.',
        harvesting: 'Harvest when fruits are creamy white and firm.',
        storage: 'Consume fresh for best flavor.',
        companionPlants: 'Carrots, Basil. Avoid Corn.',
        varieties: 'White Currant Original',
    },
    {
        id: 18,
        name: 'Great White Tomato',
        description: 'Start indoors. Produces large, sweet white tomatoes.',
        plantingZone: 'Zones 4-10',
        optimalPlantingDate: 'March 20 - April 20',
        growthSeason: '80-85 days',
        sunlight: 'Full Sun',
        watering: 'Water deeply twice a week.',
        soilType: 'Rich, loamy soil',
        fertilization: 'Fertilize with compost or tomato feed every 3 weeks.',
        pruning: 'Remove lower leaves to prevent diseases.',
        pests: 'Aphids, cutworms. Use organic deterrents.',
        harvesting: 'Harvest when tomatoes are creamy white and firm.',
        storage: 'Refrigerate or use fresh within a week.',
        companionPlants: 'Marigolds, Basil. Avoid Dill.',
        varieties: 'Great White Original',
    },
    {
        id: 19,
        name: 'Martino’s Roma Tomato',
        description: 'Start indoors. High-yield variety perfect for sauces.',
        plantingZone: 'Zones 4-10',
        optimalPlantingDate: 'March 15 - April 15',
        growthSeason: '75-80 days',
        sunlight: 'Full Sun',
        watering: 'Water consistently; avoid waterlogging.',
        soilType: 'Loamy, nutrient-dense soil',
        fertilization: 'Fertilize every 2 weeks with balanced fertilizer.',
        pruning: 'Prune for better air circulation and fruit development.',
        pests: 'Tomato hornworm, whiteflies. Use neem oil or organic sprays.',
        harvesting: 'Harvest when tomatoes are deep red and firm.',
        storage: 'Store in a cool, dry place for up to a week.',
        companionPlants: 'Garlic, Basil. Avoid Fennel.',
        varieties: 'Martino’s Original',
    },
    {
        id: 20,
        name: 'Alexandria Strawberry',
        description: 'Produces sweet, small strawberries ideal for containers.',
        plantingZone: 'Zones 3-9',
        optimalPlantingDate: 'March 15 - April 15',
        growthSeason: '90-120 days',
        sunlight: 'Full Sun to Partial Shade',
        watering: 'Keep soil consistently moist but not waterlogged.',
        soilType: 'Loamy, well-drained soil',
        fertilization: 'Feed with balanced fertilizer every 4 weeks.',
        pruning: 'Remove runners to focus energy on fruit production.',
        pests: 'Slugs, aphids. Use organic deterrents or traps.',
        harvesting: 'Harvest when berries are fully red and firm.',
        storage: 'Consume fresh or refrigerate for up to 3 days.',
        companionPlants: 'Spinach, Borage. Avoid Cabbage.',
        varieties: 'Alexandria Heirloom',
    },
    {
        id: 21,
        name: 'Toothache Plant',
        description: 'Medicinal plant known for its numbing properties.',
        plantingZone: 'Zones 9-11',
        optimalPlantingDate: 'April 1 - May 1',
        growthSeason: '60-90 days',
        sunlight: 'Full Sun',
        watering: 'Moderate; avoid overwatering.',
        soilType: 'Rich, well-drained soil',
        fertilization: 'Fertilize every 2 weeks with a balanced fertilizer.',
        pruning: 'Pinch off flowers to encourage more blooms.',
        pests: 'Minimal pest issues; may attract spider mites.',
        harvesting: 'Harvest leaves and flowers as needed.',
        storage: 'Dry flowers for long-term use.',
        companionPlants: 'Chamomile, Calendula.',
        varieties: 'Spilanthes oleracea',
    },
    {
        id: 22,
        name: 'Blue Perfection Viola',
        description: 'Compact viola with vibrant blue flowers.',
        plantingZone: 'Zones 3-8',
        optimalPlantingDate: 'March 10 - April 10',
        growthSeason: '60-80 days',
        sunlight: 'Partial Shade to Full Sun',
        watering: 'Moderate; keep soil evenly moist.',
        soilType: 'Loamy, well-drained soil',
        fertilization: 'Feed monthly with a general-purpose fertilizer.',
        pruning: 'Deadhead spent flowers to encourage continuous blooming.',
        pests: 'Aphids, slugs. Use organic pest control.',
        harvesting: 'Pick flowers for decorative or culinary use.',
        storage: 'Use fresh or dry for later use.',
        companionPlants: 'Pansies, Snapdragons.',
        varieties: 'Blue Perfection Hybrid',
    },
    {
        id: 23,
        name: 'Johnny Jump-Up Violas',
        description: 'Small, cheerful flowers ideal for borders and containers.',
        plantingZone: 'Zones 3-9',
        optimalPlantingDate: 'March 15 - April 15',
        growthSeason: '60-90 days',
        sunlight: 'Partial Shade to Full Sun',
        watering: 'Water consistently; avoid letting soil dry out.',
        soilType: 'Rich, well-drained soil',
        fertilization: 'Fertilize monthly with balanced fertilizer.',
        pruning: 'Deadhead regularly to prolong blooming.',
        pests: 'Aphids, spider mites. Use neem oil as needed.',
        harvesting: 'Harvest flowers for decoration or culinary use.',
        storage: 'Use fresh or store dried flowers.',
        companionPlants: 'Alyssum, Lobelia.',
        varieties: 'Johnny Jump-Up Original',
    },
    {
        id: 24,
        name: 'Witch Hazel',
        description: 'Deciduous shrub with medicinal and ornamental value.',
        plantingZone: 'Zones 3-8',
        optimalPlantingDate: 'March 20 - April 20',
        growthSeason: '1-2 years for maturity',
        sunlight: 'Partial Shade to Full Sun',
        watering: 'Water regularly during the first year.',
        soilType: 'Loamy, well-drained soil',
        fertilization: 'Fertilize in early spring with organic matter.',
        pruning: 'Prune after flowering to shape the shrub.',
        pests: 'Minimal pest issues; occasional aphids.',
        harvesting: 'Harvest bark and leaves for medicinal use.',
        storage: 'Dry bark and leaves for long-term use.',
        companionPlants: 'Ferns, Rhododendrons.',
        varieties: 'Common Witch Hazel, Chinese Witch Hazel',
    },
    {
        id: 25,
        name: 'Wormwood',
        description: 'Perennial herb known for its silvery foliage and medicinal uses.',
        plantingZone: 'Zones 4-9',
        optimalPlantingDate: 'March 10 - April 10',
        growthSeason: '2-3 years for maturity',
        sunlight: 'Full Sun',
        watering: 'Low; drought-tolerant once established.',
        soilType: 'Well-drained, sandy soil',
        fertilization: 'Minimal; add compost once a year.',
        pruning: 'Cut back in early spring to encourage growth.',
        pests: 'Generally pest-resistant.',
        harvesting: 'Harvest leaves and stems as needed.',
        storage: 'Dry leaves for long-term use.',
        companionPlants: 'Thyme, Lavender.',
        varieties: 'Silver King, Powis Castle',
    },
    {
        id: 26,
        name: 'Ledmon Watermelon',
        description: 'Produces large, sweet watermelons with thick rinds.',
        plantingZone: 'Zones 3-9',
        optimalPlantingDate: 'April 1 - May 15',
        growthSeason: '80-100 days',
        sunlight: 'Full Sun',
        watering: 'Deep watering once a week.',
        soilType: 'Sandy, well-drained soil',
        fertilization: 'Fertilize every 3 weeks with a high-phosphorus fertilizer.',
        pruning: 'Trim vines to focus energy on fewer fruits.',
        pests: 'Cucumber beetles, aphids. Use row covers and neem oil.',
        harvesting: 'Harvest when the tendril near the fruit turns brown.',
        storage: 'Keep in a cool, dry place for up to 2 weeks.',
        companionPlants: 'Corn, Sunflowers. Avoid Potatoes.',
        varieties: 'Ledmon Heirloom',
    },
    {
        id: 27,
        name: 'Dusty Miller',
        description: 'Ornamental plant with silvery, velvety foliage.',
        plantingZone: 'Zones 7-10',
        optimalPlantingDate: 'March 15 - April 15',
        growthSeason: 'Annual or perennial depending on climate',
        sunlight: 'Full Sun',
        watering: 'Moderate; allow soil to dry between watering.',
        soilType: 'Well-drained, sandy soil',
        fertilization: 'Fertilize sparingly; once a month during the growing season.',
        pruning: 'Prune to maintain shape and remove dead leaves.',
        pests: 'Aphids, slugs. Use organic pest control methods.',
        harvesting: 'Harvest foliage for decorative use.',
        storage: 'Use fresh for arrangements.',
        companionPlants: 'Petunias, Snapdragons.',
        varieties: 'Silver Dust, Cirrus',
    },
    {
        id: 28,
        name: 'Mung Bean Sprout',
        description: 'Quick-growing sprouts for fresh eating.',
        plantingZone: 'All zones (indoor sprouting)',
        optimalPlantingDate: 'Year-round',
        growthSeason: '5-10 days',
        sunlight: 'Indirect Light',
        watering: 'Rinse seeds twice daily.',
        soilType: 'Not applicable; grown in water or trays',
        fertilization: 'None required.',
        pruning: 'Not applicable.',
        pests: 'Minimal; ensure proper rinsing to prevent mold.',
        harvesting: 'Harvest when sprouts are 1-2 inches long.',
        storage: 'Refrigerate for up to 3 days.',
        companionPlants: 'Not applicable.',
        varieties: 'Organic Sprouting Mung Beans',
    },
    {
        id: 29,
        name: 'Swamp Milkweed',
        description: 'Native perennial that attracts monarch butterflies.',
        plantingZone: 'Zones 3-8',
        optimalPlantingDate: 'April 1 - May 1',
        growthSeason: '90-120 days',
        sunlight: 'Full Sun',
        watering: 'Moderate to high; thrives in moist soil.',
        soilType: 'Rich, loamy soil',
        fertilization: 'Apply compost in spring.',
        pruning: 'Cut back in late fall to prevent reseeding.',
        pests: 'Milkweed beetles, aphids. Use insecticidal soap as needed.',
        harvesting: 'Harvest seed pods for propagation or crafts.',
        storage: 'Store seeds in a cool, dry place.',
        companionPlants: 'Coneflowers, Black-Eyed Susans.',
        varieties: 'Rose Milkweed, White Swamp Milkweed',
    },
    {
        id: 30,
        name: 'Stiff Goldenrod',
        description: 'Perennial native plant that supports pollinators.',
        plantingZone: 'Zones 3-8',
        optimalPlantingDate: 'April 1 - May 1',
        growthSeason: '90-120 days',
        sunlight: 'Full Sun',
        watering: 'Low; drought-tolerant once established.',
        soilType: 'Well-drained, sandy soil',
        fertilization: 'Apply compost in spring.',
        pruning: 'Cut back in late fall to promote new growth.',
        pests: 'Generally pest-resistant.',
        harvesting: 'Not typically harvested; enjoy its blooms.',
        storage: 'Not applicable.',
        companionPlants: 'Asters, Coneflowers.',
        varieties: 'Showy Goldenrod, Rough Goldenrod',
    },
    {
        id: 31,
        name: 'Arikara Sunflowers',
        description: 'Heirloom sunflower variety with edible seeds.',
        plantingZone: 'Zones 3-9',
        optimalPlantingDate: 'April 15 - May 15',
        growthSeason: '70-90 days',
        sunlight: 'Full Sun',
        watering: 'Moderate; water deeply once a week.',
        soilType: 'Well-drained, fertile soil',
        fertilization: 'Fertilize lightly at planting time.',
        pruning: 'Not required; remove spent flowers if desired.',
        pests: 'Aphids, sunflower moths. Use neem oil as needed.',
        harvesting: 'Harvest seeds when heads turn brown and dry.',
        storage: 'Store seeds in a cool, dry place.',
        companionPlants: 'Corn, Beans.',
        varieties: 'Arikara Heirloom',
    },
    {
        id: 32,
        name: 'Black Cherry Sunflowers',
        description: 'Dark, rich sunflowers that attract pollinators.',
        plantingZone: 'Zones 4-10',
        optimalPlantingDate: 'April 10 - May 10',
        growthSeason: '60-80 days',
        sunlight: 'Full Sun',
        watering: 'Moderate; ensure even soil moisture.',
        soilType: 'Rich, well-drained soil',
        fertilization: 'Apply a balanced fertilizer once during planting.',
        pruning: 'Not required; deadhead to promote more blooms.',
        pests: 'Aphids, cutworms. Use row covers or organic sprays.',
        harvesting: 'Harvest flowers for decoration when fully open.',
        storage: 'Not applicable.',
        companionPlants: 'Zinnias, Marigolds.',
        varieties: 'Black Cherry Hybrid',
    },
    {
        id: 33,
        name: 'Wild Sunflowers',
        description: 'Hardy native sunflowers that support wildlife.',
        plantingZone: 'Zones 3-9',
        optimalPlantingDate: 'April 20 - May 20',
        growthSeason: '70-100 days',
        sunlight: 'Full Sun',
        watering: 'Low; drought-tolerant once established.',
        soilType: 'Well-drained, sandy soil',
        fertilization: 'Minimal; enrich soil with compost before planting.',
        pruning: 'Not required; remove spent flowers for tidiness.',
        pests: 'Sunflower beetles. Use companion planting or organic sprays.',
        harvesting: 'Harvest seeds when mature for snacks or bird feed.',
        storage: 'Store seeds in an airtight container.',
        companionPlants: 'Corn, Squash.',
        varieties: 'Native Wild Sunflower',
    },
    {
        id: 34,
        name: 'Texas Bluebonnet',
        description: 'Iconic wildflower of Texas that attracts pollinators.',
        plantingZone: 'Zones 3-8',
        optimalPlantingDate: 'February 15 - March 15',
        growthSeason: '60-90 days',
        sunlight: 'Full Sun',
        watering: 'Low; prefers dry conditions.',
        soilType: 'Sandy, well-drained soil',
        fertilization: 'Not required in fertile soils.',
        pruning: 'Not needed; allow plants to reseed naturally.',
        pests: 'Generally pest-resistant.',
        harvesting: 'Not typically harvested; enjoy its blooms.',
        storage: 'Not applicable.',
        companionPlants: 'Indian Paintbrush, Coneflowers.',
        varieties: 'Texas Bluebonnet Original',
    },
    {
        id: 35,
        name: 'Californian Poppy',
        description: 'Bright, cheerful wildflower perfect for borders.',
        plantingZone: 'Zones 6-10',
        optimalPlantingDate: 'March 1 - April 1',
        growthSeason: '60-90 days',
        sunlight: 'Full Sun',
        watering: 'Low; drought-tolerant.',
        soilType: 'Sandy, well-drained soil',
        fertilization: 'Not required; thrives in poor soils.',
        pruning: 'Deadhead to encourage continuous blooming.',
        pests: 'Aphids, spider mites. Use organic sprays.',
        harvesting: 'Harvest flowers for decoration.',
        storage: 'Use fresh or dry for arrangements.',
        companionPlants: 'Lavender, Coreopsis.',
        varieties: 'California Orange, Mission Bells',
    },
    {
        id: 36,
        name: 'Wildflower Mix',
        description: 'A vibrant mix of native flowers for pollinators.',
        plantingZone: 'Zones 3-9',
        optimalPlantingDate: 'March 15 - April 15',
        growthSeason: 'Varies by species; generally 60-120 days.',
        sunlight: 'Full Sun',
        watering: 'Moderate; water during dry spells.',
        soilType: 'Well-drained, loamy soil',
        fertilization: 'Not required in fertile soils.',
        pruning: 'Not needed; allow plants to reseed naturally.',
        pests: 'Minimal; occasional aphids or beetles.',
        harvesting: 'Not typically harvested; enjoy their blooms.',
        storage: 'Not applicable.',
        companionPlants: 'Grasses, Herbs.',
        varieties: 'Pollinator Blend, Butterfly Mix',
    },
    {
        id: 37,
        name: 'Sea Shells Cosmos',
        description: 'Unique tubular flowers that attract pollinators.',
        plantingZone: 'Zones 3-10',
        optimalPlantingDate: 'April 1 - May 1',
        growthSeason: '60-80 days',
        sunlight: 'Full Sun',
        watering: 'Moderate; keep soil evenly moist.',
        soilType: 'Well-drained, loamy soil',
        fertilization: 'Fertilize lightly at planting time.',
        pruning: 'Deadhead to prolong blooming.',
        pests: 'Aphids, spider mites. Use neem oil as needed.',
        harvesting: 'Harvest flowers for decoration.',
        storage: 'Use fresh for arrangements.',
        companionPlants: 'Marigolds, Zinnias.',
        varieties: 'Sea Shells Mixed Colors',
    },
    {
        id: 38,
        name: 'Bachelor’s Button',
        description: 'Charming wildflower ideal for borders and bouquets.',
        plantingZone: 'Zones 3-8',
        optimalPlantingDate: 'March 15 - April 15',
        growthSeason: '60-80 days',
        sunlight: 'Full Sun',
        watering: 'Low; drought-tolerant.',
        soilType: 'Well-drained, sandy soil',
        fertilization: 'Not required in fertile soils.',
        pruning: 'Deadhead to encourage more blooms.',
        pests: 'Minimal; generally pest-resistant.',
        harvesting: 'Harvest flowers when fully open.',
        storage: 'Use fresh or dry for arrangements.',
        companionPlants: 'Poppies, Lavender.',
        varieties: 'Classic Blue, Mixed Colors',
    },
    {
        id: 39,
        name: 'Cornflower',
        description: 'Hardy annual with vivid blue blooms.',
        plantingZone: 'Zones 3-8',
        optimalPlantingDate: 'March 10 - April 10',
        growthSeason: '60-90 days',
        sunlight: 'Full Sun',
        watering: 'Moderate; keep soil evenly moist.',
        soilType: 'Well-drained, fertile soil',
        fertilization: 'Fertilize lightly at planting time.',
        pruning: 'Deadhead to extend blooming season.',
        pests: 'Minimal; occasionally aphids.',
        harvesting: 'Harvest flowers for decoration or edible use.',
        storage: 'Use fresh or dry.',
        companionPlants: 'Snapdragons, Cosmos.',
        varieties: 'Classic Blue, Frosty Mix',
    },
    {
        id: 40,
        name: 'Purple Coneflower',
        description: 'A native perennial known for its daisy-like flowers and medicinal roots.',
        plantingZone: 'Zones 3-8',
        optimalPlantingDate: 'April 1 - May 1',
        growthSeason: '90-120 days',
        sunlight: 'Full Sun',
        watering: 'Moderate; water weekly in dry conditions.',
        soilType: 'Loamy, well-drained soil',
        fertilization: 'Apply compost in spring.',
        pruning: 'Deadhead to encourage additional blooms.',
        pests: 'Aphids, Japanese beetles. Use insecticidal soap as needed.',
        harvesting: 'Harvest flowers when fully open for medicinal or decorative use.',
        storage: 'Dry flowers for long-term use.',
        companionPlants: 'Black-Eyed Susans, Goldenrod.',
        varieties: 'Magnus, White Swan',
    },
    {
        id: 41,
        name: 'Butterfly Weed',
        description: 'Bright orange flowers that attract butterflies and bees.',
        plantingZone: 'Zones 4-9',
        optimalPlantingDate: 'April 15 - May 15',
        growthSeason: '70-90 days',
        sunlight: 'Full Sun',
        watering: 'Low; drought-tolerant once established.',
        soilType: 'Well-drained, sandy soil',
        fertilization: 'Not required; thrives in poor soils.',
        pruning: 'Cut back in late fall to encourage growth.',
        pests: 'Generally pest-resistant.',
        harvesting: 'Not typically harvested; enjoy its blooms.',
        storage: 'Not applicable.',
        companionPlants: 'Coneflowers, Milkweed.',
        varieties: 'Hello Yellow, Orange Glory',
    },
    {
        id: 42,
        name: 'Yellow Coneflower',
        description: 'Slender yellow petals with prominent seed heads.',
        plantingZone: 'Zones 3-8',
        optimalPlantingDate: 'April 10 - May 10',
        growthSeason: '80-100 days',
        sunlight: 'Full Sun',
        watering: 'Moderate; water during prolonged dry spells.',
        soilType: 'Loamy, sandy soil',
        fertilization: 'Apply compost in early spring.',
        pruning: 'Deadhead to prolong blooming season.',
        pests: 'Minimal; occasionally aphids or beetles.',
        harvesting: 'Not typically harvested; ideal for wildflower gardens.',
        storage: 'Not applicable.',
        companionPlants: 'Goldenrod, Wild Bergamot.',
        varieties: 'Prairie Coneflower, Gray-Headed Coneflower',
    },
    {
        id: 43,
        name: 'Hyssop Anise',
        description: 'An aromatic herb with blue flowers that attract pollinators.',
        plantingZone: 'Zones 4-9',
        optimalPlantingDate: 'April 1 - April 30',
        growthSeason: '80-100 days',
        sunlight: 'Full Sun',
        watering: 'Low; drought-tolerant once established.',
        soilType: 'Well-drained, sandy soil',
        fertilization: 'Fertilize lightly in spring.',
        pruning: 'Deadhead to encourage continuous blooms.',
        pests: 'Generally pest-free.',
        harvesting: 'Harvest leaves and flowers for culinary or medicinal use.',
        storage: 'Dry leaves and flowers for long-term use.',
        companionPlants: 'Lavender, Thyme.',
        varieties: 'Blue Fortune, Golden Jubilee',
    },
    {
        id: 44,
        name: 'Blue Borage',
        description: 'Edible blue flowers with a mild cucumber flavor.',
        plantingZone: 'Zones 3-9',
        optimalPlantingDate: 'March 15 - April 15',
        growthSeason: '60-80 days',
        sunlight: 'Full Sun',
        watering: 'Moderate; keep soil consistently moist.',
        soilType: 'Rich, well-drained soil',
        fertilization: 'Apply compost at planting time.',
        pruning: 'Not required; deadhead to prolong blooming.',
        pests: 'Aphids. Use organic insecticides as needed.',
        harvesting: 'Harvest flowers and leaves for culinary use.',
        storage: 'Use fresh or dry for later use.',
        companionPlants: 'Strawberries, Tomatoes.',
        varieties: 'Common Borage',
    },
    {
        id: 45,
        name: 'Snapdragon',
        description: 'Popular annual with colorful flowers.',
        plantingZone: 'Zones 7-10',
        optimalPlantingDate: 'March 1 - March 31',
        growthSeason: '60-90 days',
        sunlight: 'Full Sun',
        watering: 'Moderate; water when the topsoil feels dry.',
        soilType: 'Well-drained, fertile soil',
        fertilization: 'Feed monthly with a balanced fertilizer.',
        pruning: 'Deadhead regularly to encourage more blooms.',
        pests: 'Aphids, spider mites. Use neem oil as needed.',
        harvesting: 'Cut flowers for arrangements when half open.',
        storage: 'Store cut flowers in water.',
        companionPlants: 'Pansies, Violas.',
        varieties: 'Rocket Mix, Liberty Classic',
    },
    {
        id: 46,
        name: 'Petunia',
        description: 'Colorful annuals ideal for containers and borders.',
        plantingZone: 'Zones 9-11',
        optimalPlantingDate: 'March 15 - April 15',
        growthSeason: '60-90 days',
        sunlight: 'Full Sun to Partial Shade',
        watering: 'Moderate; water deeply once a week.',
        soilType: 'Loamy, well-drained soil',
        fertilization: 'Apply liquid fertilizer every 2 weeks.',
        pruning: 'Pinch back stems to encourage bushy growth.',
        pests: 'Aphids, caterpillars. Use companion planting or organic sprays.',
        harvesting: 'Not applicable.',
        storage: 'Not applicable.',
        companionPlants: 'Marigolds, Lavender.',
        varieties: 'Wave Series, Supertunia Vista',
    },
    {
        id: 47,
        name: 'Lavender',
        description: 'Fragrant perennial herb with purple flowers.',
        plantingZone: 'Zones 5-9',
        optimalPlantingDate: 'March 20 - April 20',
        growthSeason: '90-120 days',
        sunlight: 'Full Sun',
        watering: 'Low; drought-tolerant once established.',
        soilType: 'Well-drained, sandy soil',
        fertilization: 'Fertilize sparingly; too much fertilizer reduces fragrance.',
        pruning: 'Prune in early spring to maintain shape.',
        pests: 'Generally pest-resistant.',
        harvesting: 'Harvest flowers just before they open for optimal fragrance.',
        storage: 'Dry flowers for long-term use.',
        companionPlants: 'Roses, Sage.',
        varieties: 'English Lavender, French Lavender',
    },
    {
        id: 48,
        name: 'Zinnia',
        description: 'Bright, colorful flowers that bloom all summer.',
        plantingZone: 'Zones 3-10',
        optimalPlantingDate: 'April 15 - May 15',
        growthSeason: '60-80 days',
        sunlight: 'Full Sun',
        watering: 'Moderate; water deeply once a week.',
        soilType: 'Rich, well-drained soil',
        fertilization: 'Fertilize every 3 weeks with a balanced fertilizer.',
        pruning: 'Deadhead to encourage continuous blooms.',
        pests: 'Aphids, spider mites. Use neem oil or organic sprays.',
        harvesting: 'Harvest flowers when fully open.',
        storage: 'Use fresh for arrangements.',
        companionPlants: 'Marigolds, Cosmos.',
        varieties: 'Lilliput, State Fair',
    },
    {
        id: 49,
        name: 'Nasturtium',
        description: 'Edible flowers and leaves with a peppery flavor.',
        plantingZone: 'Zones 4-10',
        optimalPlantingDate: 'April 1 - April 30',
        growthSeason: '50-70 days',
        sunlight: 'Full Sun to Partial Shade',
        watering: 'Moderate; do not overwater.',
        soilType: 'Well-drained, sandy soil',
        fertilization: 'Minimal; thrives in poor soils.',
        pruning: 'Not required; deadhead for tidiness.',
        pests: 'Aphids, whiteflies. Use companion planting for deterrence.',
        harvesting: 'Harvest flowers and leaves as needed for culinary use.',
        storage: 'Use fresh or refrigerate briefly.',
        companionPlants: 'Tomatoes, Cucumbers.',
        varieties: 'Empress of India, Jewel Mix',
    },
    {
        id: 50,
        name: 'English White Daisy',
        description: 'Charming perennial with small white flowers.',
        plantingZone: 'Zones 4-8',
        optimalPlantingDate: 'March 15 - April 15',
        growthSeason: '60-90 days',
        sunlight: 'Full Sun to Partial Shade',
        watering: 'Moderate; keep soil consistently moist.',
        soilType: 'Rich, well-drained soil',
        fertilization: 'Apply compost in early spring.',
        pruning: 'Deadhead to encourage continuous blooms.',
        pests: 'Minimal; occasionally aphids.',
        harvesting: 'Not typically harvested; enjoy as ornamental.',
        storage: 'Not applicable.',
        companionPlants: 'Pansies, Snapdragons.',
        varieties: 'Snow Carpet, Alba Plena',
    },
    {
        id: 51,
        name: 'Paper Daisy',
        description: 'Striking flowers often used in dried arrangements.',
        plantingZone: 'Zones 6-10',
        optimalPlantingDate: 'April 1 - May 1',
        growthSeason: '60-90 days',
        sunlight: 'Full Sun',
        watering: 'Low; drought-tolerant.',
        soilType: 'Well-drained, sandy soil',
        fertilization: 'Fertilize lightly at planting time.',
        pruning: 'Deadhead to encourage additional blooms.',
        pests: 'Generally pest-resistant.',
        harvesting: 'Harvest flowers when fully open for drying.',
        storage: 'Dry flowers in a cool, dark place.',
        companionPlants: 'Lavender, Zinnias.',
        varieties: 'Everlasting Mixed, Golden Beauty',
    },
    {
        id: 52,
        name: 'Valerian',
        description: 'Perennial herb known for its medicinal roots and fragrant flowers.',
        plantingZone: 'Zones 4-9',
        optimalPlantingDate: 'March 20 - April 20',
        growthSeason: '90-120 days',
        sunlight: 'Full Sun to Partial Shade',
        watering: 'Moderate; water during dry periods.',
        soilType: 'Rich, loamy soil',
        fertilization: 'Apply compost in spring.',
        pruning: 'Cut back in fall to prevent reseeding.',
        pests: 'Minimal; occasionally aphids.',
        harvesting: 'Harvest roots in late fall for medicinal use.',
        storage: 'Dry roots for long-term use.',
        companionPlants: 'Chamomile, Lavender.',
        varieties: 'Common Valerian',
    },
    {
        id: 53,
        name: 'Sugar Beet',
        description: 'Root vegetable known for its high sugar content.',
        plantingZone: 'Zones 3-8',
        optimalPlantingDate: 'March 10 - April 10',
        growthSeason: '90-120 days',
        sunlight: 'Full Sun',
        watering: 'Moderate; water regularly during dry spells.',
        soilType: 'Rich, well-drained soil',
        fertilization: 'Fertilize with nitrogen-rich fertilizer.',
        pruning: 'Not required.',
        pests: 'Flea beetles, aphids. Use organic deterrents.',
        harvesting: 'Harvest when roots are 3-4 inches in diameter.',
        storage: 'Store in a cool, dry place for up to 2 weeks.',
        companionPlants: 'Carrots, Radishes.',
        varieties: 'Monogerm, Klein Wanzlebener',
    },
    {
        id: 54,
        name: 'St. John’s Wort',
        description: 'Medicinal herb with bright yellow flowers.',
        plantingZone: 'Zones 5-9',
        optimalPlantingDate: 'April 1 - May 1',
        growthSeason: '90-120 days',
        sunlight: 'Full Sun to Partial Shade',
        watering: 'Low; drought-tolerant once established.',
        soilType: 'Well-drained, sandy soil',
        fertilization: 'Minimal; thrives in poor soils.',
        pruning: 'Prune in late fall to maintain shape.',
        pests: 'Generally pest-free.',
        harvesting: 'Harvest flowers and leaves for medicinal use.',
        storage: 'Dry flowers and leaves for long-term use.',
        companionPlants: 'Chamomile, Lavender.',
        varieties: 'Hypericum Perforatum',
    },
    {
        id: 55,
        name: 'Mennonite Sorghum',
        description: 'Versatile grain plant used for syrup and forage.',
        plantingZone: 'Zones 5-10',
        optimalPlantingDate: 'April 15 - May 15',
        growthSeason: '100-120 days',
        sunlight: 'Full Sun',
        watering: 'Moderate; water deeply every 10 days.',
        soilType: 'Rich, loamy soil',
        fertilization: 'Fertilize with nitrogen-rich fertilizer at planting.',
        pruning: 'Not required.',
        pests: 'Armyworms, aphids. Use organic pest control.',
        harvesting: 'Harvest grains when seed heads are dry.',
        storage: 'Store grains in a cool, dry place.',
        companionPlants: 'Corn, Beans.',
        varieties: 'Mennonite Heirloom',
    },
    {
        id: 56,
        name: 'Sugar Snap Pea - Sugar Daddy',
        description: 'Stringless snap peas perfect for fresh eating.',
        plantingZone: 'Zones 3-9',
        optimalPlantingDate: 'March 1 - April 1',
        growthSeason: '60-70 days',
        sunlight: 'Full Sun to Partial Shade',
        watering: 'Moderate; keep soil consistently moist.',
        soilType: 'Rich, well-drained soil',
        fertilization: 'Fertilize with balanced fertilizer every 2 weeks.',
        pruning: 'Not required.',
        pests: 'Aphids, cutworms. Use companion planting for pest control.',
        harvesting: 'Harvest pods when fully grown but still tender.',
        storage: 'Refrigerate fresh pods for up to 5 days.',
        companionPlants: 'Carrots, Radishes.',
        varieties: 'Sugar Daddy Original',
    },
    {
        id: 57,
        name: 'Rock Soapwort',
        description: 'Ground cover plant with delicate pink flowers.',
        plantingZone: 'Zones 5-8',
        optimalPlantingDate: 'April 1 - April 30',
        growthSeason: '90-120 days',
        sunlight: 'Full Sun',
        watering: 'Low; drought-tolerant.',
        soilType: 'Sandy, well-drained soil',
        fertilization: 'Minimal; compost at planting time.',
        pruning: 'Prune after blooming to maintain shape.',
        pests: 'Generally pest-free.',
        harvesting: 'Not applicable.',
        storage: 'Not applicable.',
        companionPlants: 'Lavender, Thyme.',
        varieties: 'Pink Beauty, Alba',
    },
    {
        id: 58,
        name: 'Creeping Thyme',
        description: 'Low-growing herb with fragrant foliage.',
        plantingZone: 'Zones 4-9',
        optimalPlantingDate: 'March 15 - April 15',
        growthSeason: '90-120 days',
        sunlight: 'Full Sun',
        watering: 'Low; water sparingly.',
        soilType: 'Well-drained, sandy soil',
        fertilization: 'Minimal; add compost at planting.',
        pruning: 'Prune after flowering to maintain shape.',
        pests: 'Generally pest-resistant.',
        harvesting: 'Harvest leaves and flowers as needed.',
        storage: 'Dry leaves for long-term use.',
        companionPlants: 'Lavender, Sage.',
        varieties: 'Magic Carpet, Elfin',
    },
    {
        id: 59,
        name: 'Pepper Cress',
        description: 'Fast-growing leafy green with a peppery flavor.',
        plantingZone: 'Zones 3-9',
        optimalPlantingDate: 'March 10 - April 10',
        growthSeason: '20-30 days',
        sunlight: 'Full Sun to Partial Shade',
        watering: 'Moderate; keep soil evenly moist.',
        soilType: 'Rich, loamy soil',
        fertilization: 'Fertilize lightly at planting.',
        pruning: 'Not required.',
        pests: 'Minimal; occasionally flea beetles.',
        harvesting: 'Harvest leaves when young and tender.',
        storage: 'Refrigerate for up to a week.',
        companionPlants: 'Radishes, Lettuce.',
        varieties: 'Wrinkled Crinkled, Upland Cress',
    },
    {
        id: 60,
        name: 'Green Purslane',
        description: 'Succulent leafy vegetable with high nutritional value.',
        plantingZone: 'Zones 3-10',
        optimalPlantingDate: 'April 1 - May 1',
        growthSeason: '30-50 days',
        sunlight: 'Full Sun',
        watering: 'Low; drought-tolerant.',
        soilType: 'Sandy, well-drained soil',
        fertilization: 'Minimal; compost at planting time.',
        pruning: 'Not required.',
        pests: 'Minimal; occasionally flea beetles.',
        harvesting: 'Harvest leaves when young and tender.',
        storage: 'Refrigerate for up to 5 days.',
        companionPlants: 'Carrots, Radishes.',
        varieties: 'Golden Purslane, Common Purslane',
    },
    {
        id: 61,
        name: 'Ashwagandha',
        description: 'Medicinal herb known for its adaptogenic properties.',
        plantingZone: 'Zones 8-11',
        optimalPlantingDate: 'April 15 - May 15',
        growthSeason: '150-180 days',
        sunlight: 'Full Sun',
        watering: 'Low; allow soil to dry out between waterings.',
        soilType: 'Well-drained, sandy soil',
        fertilization: 'Apply compost at planting time.',
        pruning: 'Prune to shape during the growing season.',
        pests: 'Generally pest-free.',
        harvesting: 'Harvest roots in late fall.',
        storage: 'Dry roots for long-term use.',
        companionPlants: 'Basil, Thyme.',
        varieties: 'Withania Somnifera',
    },
    {
        id: 62,
        name: 'Gala Apples',
        description: 'Popular apple variety with a sweet, crisp flavor.',
        plantingZone: 'Zones 4-8',
        optimalPlantingDate: 'February 15 - March 15',
        growthSeason: '3-5 years to fruit',
        sunlight: 'Full Sun',
        watering: 'Moderate; deep water weekly.',
        soilType: 'Loamy, well-drained soil',
        fertilization: 'Fertilize in early spring and mid-summer.',
        pruning: 'Prune in late winter to shape and remove deadwood.',
        pests: 'Apple maggots, codling moths. Use organic sprays.',
        harvesting: 'Harvest in late summer to early fall.',
        storage: 'Store in a cool, dry place for several weeks.',
        companionPlants: 'Chives, Marigolds.',
        varieties: 'Royal Gala, Galaxy Gala',
    },
    {
        id: 63,
        name: 'Allheal',
        description: 'Medicinal herb with purple flowers used for teas and tinctures.',
        plantingZone: 'Zones 3-8',
        optimalPlantingDate: 'March 20 - April 20',
        growthSeason: '90-120 days',
        sunlight: 'Full Sun to Partial Shade',
        watering: 'Moderate; keep soil moist but not waterlogged.',
        soilType: 'Rich, loamy soil',
        fertilization: 'Apply compost at planting time.',
        pruning: 'Prune to shape during growing season.',
        pests: 'Generally pest-free.',
        harvesting: 'Harvest leaves and flowers as needed.',
        storage: 'Dry leaves and flowers for long-term use.',
        companionPlants: 'Chamomile, Lavender.',
        varieties: 'Prunella Vulgaris',
    },
    {
        id: 64,
        name: 'Arnica',
        description: 'Medicinal herb with bright yellow flowers.',
        plantingZone: 'Zones 4-9',
        optimalPlantingDate: 'March 15 - April 15',
        growthSeason: '90-120 days',
        sunlight: 'Full Sun to Partial Shade',
        watering: 'Moderate; water during dry spells.',
        soilType: 'Sandy, well-drained soil',
        fertilization: 'Apply compost in spring.',
        pruning: 'Prune after flowering to maintain shape.',
        pests: 'Minimal; occasionally aphids.',
        harvesting: 'Harvest flowers for medicinal use.',
        storage: 'Dry flowers for long-term use.',
        companionPlants: 'Chamomile, Lavender.',
        varieties: 'Montana Arnica, Alpine Arnica',
    },
    {
        id: 65,
        name: 'Anise',
        description: 'Herbaceous annual with seeds used for flavoring.',
        plantingZone: 'Zones 6-10',
        optimalPlantingDate: 'April 1 - May 1',
        growthSeason: '120 days',
        sunlight: 'Full Sun',
        watering: 'Moderate; do not overwater.',
        soilType: 'Rich, well-drained soil',
        fertilization: 'Apply compost at planting.',
        pruning: 'Not required.',
        pests: 'Generally pest-free.',
        harvesting: 'Harvest seeds when heads turn brown.',
        storage: 'Store seeds in an airtight container.',
        companionPlants: 'Coriander, Basil.',
        varieties: 'Pimpinella Anisum',
    },
    {
        id: 66,
        name: 'White Buckwheat',
        description: 'Fast-growing cover crop with small white flowers.',
        plantingZone: 'Zones 3-10',
        optimalPlantingDate: 'May 1 - June 15',
        growthSeason: '30-40 days',
        sunlight: 'Full Sun',
        watering: 'Moderate; water during dry spells.',
        soilType: 'Sandy, well-drained soil',
        fertilization: 'Not required; improves soil naturally.',
        pruning: 'Not required.',
        pests: 'Generally pest-free.',
        harvesting: 'Harvest seeds for use as grain or forage.',
        storage: 'Store seeds in a cool, dry place.',
        companionPlants: 'Clover, Rye.',
        varieties: 'Common Buckwheat',
    },
    {
        id: 67,
        name: 'Brussel Sprouts',
        description: 'Cool-season vegetable producing mini cabbages.',
        plantingZone: 'Zones 3-9',
        optimalPlantingDate: 'March 1 - March 31',
        growthSeason: '100-120 days',
        sunlight: 'Full Sun',
        watering: 'Moderate; water regularly during dry periods.',
        soilType: 'Rich, loamy soil',
        fertilization: 'Fertilize every 4 weeks with nitrogen-rich fertilizer.',
        pruning: 'Remove yellowing leaves as plants mature.',
        pests: 'Cabbage worms, aphids. Use row covers or organic sprays.',
        harvesting: 'Harvest sprouts from bottom up when firm and green.',
        storage: 'Refrigerate for up to a week.',
        companionPlants: 'Carrots, Beans.',
        varieties: 'Long Island, Jade Cross',
    },
    {
        id: 68,
        name: 'Burdock',
        description: 'Biennial plant with edible roots and medicinal properties.',
        plantingZone: 'Zones 3-8',
        optimalPlantingDate: 'April 1 - May 1',
        growthSeason: '120-150 days',
        sunlight: 'Full Sun to Partial Shade',
        watering: 'Moderate; water during dry spells.',
        soilType: 'Rich, loamy soil',
        fertilization: 'Apply compost at planting time.',
        pruning: 'Not required.',
        pests: 'Generally pest-free.',
        harvesting: 'Harvest roots in late fall.',
        storage: 'Refrigerate roots for up to a week.',
        companionPlants: 'Carrots, Beets.',
        varieties: 'Takinogawa Long, Watanabe Early',
    },
    {
        id: 69,
        name: 'Bunching Onions',
        description: 'Perennial onion variety grown for green stems.',
        plantingZone: 'Zones 3-9',
        optimalPlantingDate: 'March 15 - April 15',
        growthSeason: '60-90 days',
        sunlight: 'Full Sun to Partial Shade',
        watering: 'Moderate; water consistently.',
        soilType: 'Rich, well-drained soil',
        fertilization: 'Fertilize every 3 weeks with balanced fertilizer.',
        pruning: 'Trim tops to encourage new growth.',
        pests: 'Onion maggots, thrips. Use row covers or organic sprays.',
        harvesting: 'Harvest stems when 6-8 inches tall.',
        storage: 'Refrigerate for up to a week.',
        companionPlants: 'Carrots, Beets.',
        varieties: 'White Lisbon, Ishikura',
    },
    {
        id: 70,
        name: 'Koral Carrot',
        description: 'Heirloom carrot variety with a sweet flavor.',
        plantingZone: 'Zones 3-9',
        optimalPlantingDate: 'March 15 - April 15',
        growthSeason: '60-80 days',
        sunlight: 'Full Sun',
        watering: 'Moderate; water regularly to keep soil moist.',
        soilType: 'Loamy, well-drained soil',
        fertilization: 'Fertilize every 2 weeks with a balanced fertilizer.',
        pruning: 'Not required.',
        pests: 'Carrot flies, aphids. Use row covers for prevention.',
        harvesting: 'Harvest when roots reach 6-8 inches long.',
        storage: 'Refrigerate for up to 2 weeks.',
        companionPlants: 'Onions, Radishes.',
        varieties: 'Koral Red, Koral Long',
    },
    {
        id: 71,
        name: 'Cosmic Purple Carrot',
        description: 'Vibrant purple carrots with an orange core.',
        plantingZone: 'Zones 3-9',
        optimalPlantingDate: 'March 15 - April 15',
        growthSeason: '70-90 days',
        sunlight: 'Full Sun',
        watering: 'Moderate; water consistently to keep soil moist.',
        soilType: 'Rich, well-drained soil',
        fertilization: 'Fertilize with a low-nitrogen fertilizer every 3 weeks.',
        pruning: 'Not required.',
        pests: 'Carrot rust flies, nematodes. Rotate crops to prevent issues.',
        harvesting: 'Harvest when roots are fully grown and bright purple.',
        storage: 'Refrigerate for up to 3 weeks.',
        companionPlants: 'Leeks, Parsley.',
        varieties: 'Cosmic Purple Original',
    },
    {
        id: 72,
        name: 'Muscade Carrot',
        description: 'French carrot variety known for its rich, sweet flavor.',
        plantingZone: 'Zones 4-9',
        optimalPlantingDate: 'March 20 - April 20',
        growthSeason: '60-80 days',
        sunlight: 'Full Sun',
        watering: 'Moderate; ensure consistent moisture.',
        soilType: 'Sandy, loamy soil',
        fertilization: 'Add compost at planting and fertilize mid-season.',
        pruning: 'Not required.',
        pests: 'Carrot rust flies, wireworms. Use organic deterrents.',
        harvesting: 'Harvest when roots are 6-8 inches long and orange.',
        storage: 'Store in a cool, dry place for up to 2 weeks.',
        companionPlants: 'Chives, Dill.',
        varieties: 'Muscade Sweet, Muscade Tender',
    },
    {
        id: 73,
        name: 'Scarlet Nantes Carrot',
        description: 'Classic carrot variety with a crisp texture.',
        plantingZone: 'Zones 3-9',
        optimalPlantingDate: 'March 10 - April 10',
        growthSeason: '70-80 days',
        sunlight: 'Full Sun',
        watering: 'Moderate; water regularly to keep soil consistently moist.',
        soilType: 'Well-drained, loamy soil',
        fertilization: 'Fertilize every 2 weeks with balanced fertilizer.',
        pruning: 'Not required.',
        pests: 'Carrot weevils, wireworms. Use companion planting for deterrence.',
        harvesting: 'Harvest when roots are 6 inches long and bright orange.',
        storage: 'Store in the fridge for up to 3 weeks.',
        companionPlants: 'Lettuce, Tomatoes.',
        varieties: 'Scarlet Nantes Improved',
    },
    {
        id: 74,
        name: 'Slow-Bolt Cilantro',
        description: 'Cilantro variety bred to resist bolting.',
        plantingZone: 'Zones 3-10',
        optimalPlantingDate: 'March 1 - March 31',
        growthSeason: '40-60 days',
        sunlight: 'Full Sun to Partial Shade',
        watering: 'Moderate; water regularly to maintain moisture.',
        soilType: 'Well-drained, sandy soil',
        fertilization: 'Fertilize lightly at planting.',
        pruning: 'Pinch off flowers to encourage leaf growth.',
        pests: 'Aphids, whiteflies. Use neem oil for control.',
        harvesting: 'Harvest leaves as needed.',
        storage: 'Refrigerate fresh leaves for up to 5 days.',
        companionPlants: 'Carrots, Parsnips.',
        varieties: 'Leisure, Calypso',
    },
    {
        id: 75,
        name: 'Little Finger Carrot',
        description: 'Small, sweet carrots perfect for snacking.',
        plantingZone: 'Zones 3-9',
        optimalPlantingDate: 'March 10 - April 10',
        growthSeason: '55-65 days',
        sunlight: 'Full Sun',
        watering: 'Moderate; water evenly to prevent cracking.',
        soilType: 'Loamy, well-drained soil',
        fertilization: 'Fertilize with a balanced fertilizer at planting.',
        pruning: 'Not required.',
        pests: 'Carrot flies, nematodes. Use crop rotation for prevention.',
        harvesting: 'Harvest when roots are 3-4 inches long.',
        storage: 'Refrigerate for up to 2 weeks.',
        companionPlants: 'Beets, Onions.',
        varieties: 'Little Finger Original',
    },
    {
        id: 76,
        name: 'Rainbow Carrot Seed Tape',
        description: 'Pre-seeded tape for growing colorful carrot varieties.',
        plantingZone: 'Zones 3-9',
        optimalPlantingDate: 'March 15 - April 15',
        growthSeason: '60-80 days',
        sunlight: 'Full Sun',
        watering: 'Moderate; water consistently to keep soil moist.',
        soilType: 'Loamy, well-drained soil',
        fertilization: 'Add compost at planting.',
        pruning: 'Not required.',
        pests: 'Carrot flies, wireworms. Use companion planting for deterrence.',
        harvesting: 'Harvest when roots are mature and colorful.',
        storage: 'Refrigerate for up to 2 weeks.',
        companionPlants: 'Radishes, Chives.',
        varieties: 'Rainbow Mix',
    },
    {
        id: 77,
        name: 'Curled Chervil',
        description: 'Delicate herb often used in French cuisine.',
        plantingZone: 'Zones 3-9',
        optimalPlantingDate: 'March 1 - March 31',
        growthSeason: '40-60 days',
        sunlight: 'Partial Shade',
        watering: 'Moderate; keep soil consistently moist.',
        soilType: 'Loamy, well-drained soil',
        fertilization: 'Fertilize lightly at planting.',
        pruning: 'Pinch off flowers to prolong leaf production.',
        pests: 'Minimal; generally pest-free.',
        harvesting: 'Harvest leaves as needed.',
        storage: 'Use fresh or refrigerate briefly.',
        companionPlants: 'Carrots, Parsnips.',
        varieties: 'French Curled Chervil',
    },
    {
        id: 78,
        name: 'Beit Alpha Cucumber',
        description: 'Seedless, burpless cucumber variety.',
        plantingZone: 'Zones 4-11',
        optimalPlantingDate: 'April 1 - May 1',
        growthSeason: '50-60 days',
        sunlight: 'Full Sun',
        watering: 'Moderate; water deeply once a week.',
        soilType: 'Rich, well-drained soil',
        fertilization: 'Fertilize every 2 weeks with balanced fertilizer.',
        pruning: 'Train vines on a trellis for better airflow.',
        pests: 'Cucumber beetles, aphids. Use organic sprays for control.',
        harvesting: 'Harvest when fruits are 4-6 inches long.',
        storage: 'Refrigerate for up to 7 days.',
        companionPlants: 'Corn, Beans.',
        varieties: 'Beit Alpha Original',
    },
    {
        id: 79,
        name: 'Purple of Sicily Cauliflower',
        description: 'Bright purple cauliflower with a nutty flavor.',
        plantingZone: 'Zones 3-9',
        optimalPlantingDate: 'March 1 - March 31',
        growthSeason: '70-85 days',
        sunlight: 'Full Sun',
        watering: 'Moderate; keep soil consistently moist.',
        soilType: 'Loamy, rich soil',
        fertilization: 'Apply compost at planting and mid-season.',
        pruning: 'Not required.',
        pests: 'Cabbage worms, aphids. Use row covers for prevention.',
        harvesting: 'Harvest heads when they are firm and bright purple.',
        storage: 'Refrigerate for up to 2 weeks.',
        companionPlants: 'Spinach, Beans.',
        varieties: 'Purple of Sicily',
    },
    {
        id: 80,
        name: 'Green Full Heart Corn Salad',
        description: 'Tender salad green with a mild, nutty flavor.',
        plantingZone: 'Zones 4-8',
        optimalPlantingDate: 'March 10 - April 10',
        growthSeason: '40-60 days',
        sunlight: 'Full Sun to Partial Shade',
        watering: 'Moderate; keep soil consistently moist.',
        soilType: 'Rich, well-drained soil',
        fertilization: 'Apply compost at planting.',
        pruning: 'Not required.',
        pests: 'Minimal; generally pest-free.',
        harvesting: 'Harvest young leaves for the best flavor.',
        storage: 'Refrigerate for up to 5 days.',
        companionPlants: 'Lettuce, Spinach.',
        varieties: 'Vit, Verte de Cambrai',
    },
    {
        id: 81,
        name: 'Fisher’s Earliest Corn',
        description: 'Early-maturing sweet corn variety.',
        plantingZone: 'Zones 3-9',
        optimalPlantingDate: 'April 15 - May 15',
        growthSeason: '70-80 days',
        sunlight: 'Full Sun',
        watering: 'Moderate; water deeply once a week.',
        soilType: 'Rich, loamy soil',
        fertilization: 'Fertilize at planting and mid-season.',
        pruning: 'Not required.',
        pests: 'Corn earworms, cutworms. Use organic sprays for control.',
        harvesting: 'Harvest when ears are plump and kernels are milky.',
        storage: 'Use immediately or refrigerate for up to 5 days.',
        companionPlants: 'Beans, Squash.',
        varieties: 'Golden Bantam, Fisher’s Favorite',
    },
    {
        id: 82,
        name: 'Glass Gem Corn',
        description: 'Stunning multicolored heirloom corn.',
        plantingZone: 'Zones 4-9',
        optimalPlantingDate: 'April 20 - May 20',
        growthSeason: '100-120 days',
        sunlight: 'Full Sun',
        watering: 'Moderate; water deeply once a week.',
        soilType: 'Rich, well-drained soil',
        fertilization: 'Fertilize at planting and when tassels appear.',
        pruning: 'Not required.',
        pests: 'Corn earworms, aphids. Use neem oil or row covers.',
        harvesting: 'Harvest when kernels are hard and colorful.',
        storage: 'Dry thoroughly for decoration or grinding.',
        companionPlants: 'Beans, Sunflowers.',
        varieties: 'Original Glass Gem',
    },
    {
        id: 83,
        name: 'Blauhilde Bean',
        description: 'Purple climbing bean with excellent flavor.',
        plantingZone: 'Zones 4-10',
        optimalPlantingDate: 'May 1 - May 30',
        growthSeason: '60-70 days',
        sunlight: 'Full Sun',
        watering: 'Moderate; water deeply once a week.',
        soilType: 'Loamy, well-drained soil',
        fertilization: 'Fertilize at planting with a balanced fertilizer.',
        pruning: 'Train on trellis for better growth.',
        pests: 'Aphids, bean beetles. Use organic sprays or companion planting.',
        harvesting: 'Harvest pods when young and tender.',
        storage: 'Refrigerate for up to a week.',
        companionPlants: 'Corn, Squash.',
        varieties: 'Blauhilde Original',
    },
    {
        id: 84,
        name: 'Landreth Stringless Green Bean',
        description: 'Bush bean variety known for its stringless pods.',
        plantingZone: 'Zones 4-9',
        optimalPlantingDate: 'April 20 - May 20',
        growthSeason: '50-60 days',
        sunlight: 'Full Sun',
        watering: 'Moderate; water deeply once a week.',
        soilType: 'Rich, well-drained soil',
        fertilization: 'Apply compost at planting.',
        pruning: 'Not required.',
        pests: 'Bean beetles, aphids. Use neem oil or organic deterrents.',
        harvesting: 'Harvest pods when they are 4-5 inches long.',
        storage: 'Refrigerate for up to a week.',
        companionPlants: 'Carrots, Corn.',
        varieties: 'Landreth Original',
    },
    {
        id: 85,
        name: 'Mongolian Giant Sunflower',
        description: 'Massive sunflower variety with edible seeds.',
        plantingZone: 'Zones 3-9',
        optimalPlantingDate: 'April 15 - May 15',
        growthSeason: '90-120 days',
        sunlight: 'Full Sun',
        watering: 'Moderate; water deeply during dry spells.',
        soilType: 'Loamy, well-drained soil',
        fertilization: 'Fertilize at planting and mid-season.',
        pruning: 'Not required.',
        pests: 'Aphids, caterpillars. Use companion planting for control.',
        harvesting: 'Harvest seeds when heads droop and seeds are fully formed.',
        storage: 'Dry seeds thoroughly for long-term storage.',
        companionPlants: 'Corn, Pumpkins.',
        varieties: 'Mongolian Giant Original',
    },
    {
        id: 86,
        name: 'Gladiolas',
        description: 'Popular flower known for its tall, colorful spikes.',
        plantingZone: 'Zones 6-10',
        optimalPlantingDate: 'April 15 - May 15',
        growthSeason: '70-90 days',
        sunlight: 'Full Sun',
        watering: 'Moderate; water regularly during growth.',
        soilType: 'Rich, well-drained soil',
        fertilization: 'Fertilize every 2 weeks with a balanced fertilizer.',
        pruning: 'Remove spent blooms to encourage growth.',
        pests: 'Thrips, aphids. Use neem oil or insecticidal soap.',
        harvesting: 'Cut stems when lower blooms begin to open.',
        storage: 'Store bulbs in a cool, dry place after the season.',
        companionPlants: 'Marigolds, Roses.',
        varieties: 'Mixed Colors, Giant Gladiolas',
    },
    {
        id: 87,
        name: 'Georgia Southern Collards',
        description: 'Hearty collard greens with a rich flavor.',
        plantingZone: 'Zones 6-10',
        optimalPlantingDate: 'March 15 - April 15',
        growthSeason: '75-85 days',
        sunlight: 'Full Sun',
        watering: 'Moderate; water consistently.',
        soilType: 'Rich, well-drained soil',
        fertilization: 'Fertilize with nitrogen-rich fertilizer every 3 weeks.',
        pruning: 'Harvest outer leaves to promote new growth.',
        pests: 'Cabbage worms, aphids. Use row covers or organic sprays.',
        harvesting: 'Harvest leaves when they are 8-10 inches long.',
        storage: 'Refrigerate for up to a week.',
        companionPlants: 'Carrots, Onions.',
        varieties: 'Georgia Southern Original',
    },
    {
        id: 88,
        name: 'German Chamomile',
        description: 'Delicate flowers used for teas and medicinal purposes.',
        plantingZone: 'Zones 3-9',
        optimalPlantingDate: 'April 1 - April 30',
        growthSeason: '60-80 days',
        sunlight: 'Full Sun to Partial Shade',
        watering: 'Moderate; keep soil consistently moist.',
        soilType: 'Loamy, well-drained soil',
        fertilization: 'Apply compost at planting.',
        pruning: 'Not required.',
        pests: 'Generally pest-free.',
        harvesting: 'Harvest flowers when fully open.',
        storage: 'Dry flowers in a cool, dark place.',
        companionPlants: 'Mint, Basil.',
        varieties: 'Matricaria Recutita',
    },
    {
        id: 89,
        name: 'Rober Cauliflower',
        description: 'Vigorous cauliflower variety with large, white heads.',
        plantingZone: 'Zones 3-9',
        optimalPlantingDate: 'March 1 - March 31',
        growthSeason: '65-75 days',
        sunlight: 'Full Sun',
        watering: 'Moderate; keep soil evenly moist.',
        soilType: 'Rich, loamy soil',
        fertilization: 'Fertilize at planting and mid-season.',
        pruning: 'Not required.',
        pests: 'Cabbage worms, aphids. Use row covers for prevention.',
        harvesting: 'Harvest heads when they are firm and fully grown.',
        storage: 'Refrigerate for up to 2 weeks.',
        companionPlants: 'Spinach, Beets.',
        varieties: 'Rober Original',
    },
    {
        id: 90,
        name: 'Common Chives',
        description: 'Herb with mild onion-flavored leaves.',
        plantingZone: 'Zones 3-9',
        optimalPlantingDate: 'March 15 - April 15',
        growthSeason: '60-90 days',
        sunlight: 'Full Sun to Partial Shade',
        watering: 'Moderate; water regularly to keep soil moist.',
        soilType: 'Rich, well-drained soil',
        fertilization: 'Apply compost in spring.',
        pruning: 'Harvest leaves as needed.',
        pests: 'Generally pest-free.',
        harvesting: 'Harvest leaves when they are 6-8 inches long.',
        storage: 'Refrigerate for up to a week.',
        companionPlants: 'Carrots, Tomatoes.',
        varieties: 'Common, Garlic Chives',
    },
    {
        id: 91,
        name: 'Catnip',
        description: 'Perennial herb with aromatic leaves loved by cats.',
        plantingZone: 'Zones 3-9',
        optimalPlantingDate: 'April 1 - April 30',
        growthSeason: '90-120 days',
        sunlight: 'Full Sun to Partial Shade',
        watering: 'Moderate; water during dry spells.',
        soilType: 'Well-drained, sandy soil',
        fertilization: 'Minimal; thrives in poor soil.',
        pruning: 'Cut back to encourage new growth.',
        pests: 'Generally pest-free.',
        harvesting: 'Harvest leaves and flowers as needed.',
        storage: 'Dry leaves for long-term use.',
        companionPlants: 'Chamomile, Lavender.',
        varieties: 'Common Catnip',
    },
    {
        id: 92,
        name: 'Purple Hull Pinkeye Cowpeas',
        description: 'Southern pea variety with purple pods and creamy seeds.',
        plantingZone: 'Zones 7-10',
        optimalPlantingDate: 'May 1 - May 31',
        growthSeason: '60-70 days',
        sunlight: 'Full Sun',
        watering: 'Moderate; water deeply once a week.',
        soilType: 'Loamy, well-drained soil',
        fertilization: 'Fertilize lightly at planting.',
        pruning: 'Not required.',
        pests: 'Aphids, weevils. Use organic pest control.',
        harvesting: 'Harvest pods when fully mature.',
        storage: 'Shell and freeze seeds for long-term storage.',
        companionPlants: 'Corn, Squash.',
        varieties: 'Purple Hull, Texas Pinkeye',
    },
    {
        id: 93,
        name: 'Crimson Clover',
        description: 'Nitrogen-fixing cover crop with bright red flowers.',
        plantingZone: 'Zones 3-10',
        optimalPlantingDate: 'March 1 - April 1',
        growthSeason: '60-70 days',
        sunlight: 'Full Sun',
        watering: 'Low; drought-tolerant.',
        soilType: 'Sandy, well-drained soil',
        fertilization: 'Not required; enriches soil naturally.',
        pruning: 'Mow before seeds set to prevent reseeding.',
        pests: 'Generally pest-free.',
        harvesting: 'Not typically harvested; use as green manure.',
        storage: 'Not applicable.',
        companionPlants: 'Corn, Beans.',
        varieties: 'Dixie, Contea',
    },
    {
        id: 94,
        name: 'Superschmelz Kohlrabi',
        description: 'Large, tender kohlrabi variety.',
        plantingZone: 'Zones 3-9',
        optimalPlantingDate: 'April 15 - May 15',
        growthSeason: '80-100 days',
        sunlight: 'Full Sun',
        watering: 'Moderate; keep soil consistently moist.',
        soilType: 'Rich, loamy soil',
        fertilization: 'Fertilize at planting and mid-season.',
        pruning: 'Not required.',
        pests: 'Cabbage worms, aphids. Use row covers for prevention.',
        harvesting: 'Harvest when bulbs are 8-10 inches in diameter.',
        storage: 'Refrigerate for up to 3 weeks.',
        companionPlants: 'Beets, Onions.',
        varieties: 'Superschmelz Original',
    },
    {
        id: 95,
        name: 'Elephant Dill',
        description: 'Aromatic herb with large seed heads.',
        plantingZone: 'Zones 4-9',
        optimalPlantingDate: 'April 1 - April 30',
        growthSeason: '60-70 days',
        sunlight: 'Full Sun',
        watering: 'Moderate; keep soil evenly moist.',
        soilType: 'Well-drained, sandy soil',
        fertilization: 'Minimal; add compost at planting.',
        pruning: 'Not required.',
        pests: 'Aphids, caterpillars. Use neem oil for prevention.',
        harvesting: 'Harvest leaves, seeds, and flowers as needed.',
        storage: 'Dry seeds and leaves for long-term use.',
        companionPlants: 'Cucumbers, Tomatoes.',
        varieties: 'Elephant Dill Original',
    },
    {
        id: 96,
        name: 'Landis Winter Lettuce',
        description: 'Cold-tolerant lettuce variety.',
        plantingZone: 'Zones 5-9',
        optimalPlantingDate: 'March 1 - March 31',
        growthSeason: '60-80 days',
        sunlight: 'Full Sun to Partial Shade',
        watering: 'Moderate; water consistently.',
        soilType: 'Rich, well-drained soil',
        fertilization: 'Fertilize lightly every 3 weeks.',
        pruning: 'Harvest outer leaves as needed.',
        pests: 'Slugs, aphids. Use organic pest deterrents.',
        harvesting: 'Harvest leaves when they are 4-6 inches long.',
        storage: 'Refrigerate for up to 5 days.',
        companionPlants: 'Carrots, Onions.',
        varieties: 'Landis Winter Original',
    },
    {
        id: 97,
        name: 'Merlot Lettuce',
        description: 'Striking red-leafed lettuce variety.',
        plantingZone: 'Zones 5-9',
        optimalPlantingDate: 'March 15 - April 15',
        growthSeason: '50-70 days',
        sunlight: 'Full Sun to Partial Shade',
        watering: 'Moderate; water consistently.',
        soilType: 'Rich, well-drained soil',
        fertilization: 'Fertilize lightly every 2 weeks.',
        pruning: 'Harvest outer leaves to encourage new growth.',
        pests: 'Aphids, slugs. Use organic pest control.',
        harvesting: 'Harvest when leaves are 4-6 inches long.',
        storage: 'Refrigerate for up to 5 days.',
        companionPlants: 'Radishes, Chives.',
        varieties: 'Merlot Red',
    },
    {
        id: 98,
        name: 'Pink Dandelion',
        description: 'Unique dandelion variety with pink flowers.',
        plantingZone: 'Zones 3-9',
        optimalPlantingDate: 'April 1 - April 30',
        growthSeason: '60-80 days',
        sunlight: 'Full Sun',
        watering: 'Low; drought-tolerant.',
        soilType: 'Sandy, well-drained soil',
        fertilization: 'Minimal; thrives in poor soils.',
        pruning: 'Not required.',
        pests: 'Minimal; generally pest-free.',
        harvesting: 'Harvest leaves when young and tender.',
        storage: 'Use fresh or dry leaves for tea.',
        companionPlants: 'Chamomile, Lavender.',
        varieties: 'Pink Dandelion Original',
    },
    {
        id: 99,
        name: 'Lemon Balm',
        description: 'Fragrant herb often used in teas and remedies.',
        plantingZone: 'Zones 3-9',
        optimalPlantingDate: 'March 20 - April 20',
        growthSeason: '70-90 days',
        sunlight: 'Full Sun to Partial Shade',
        watering: 'Moderate; keep soil consistently moist.',
        soilType: 'Rich, loamy soil',
        fertilization: 'Apply compost in spring.',
        pruning: 'Prune regularly to maintain shape.',
        pests: 'Generally pest-free.',
        harvesting: 'Harvest leaves as needed.',
        storage: 'Dry leaves for long-term storage.',
        companionPlants: 'Basil, Thyme.',
        varieties: 'Lemon Balm Original',
    },
    {
        id: 100,
        name: 'American Licorice',
        description: 'Perennial herb with sweet roots often used in teas.',
        plantingZone: 'Zones 3-9',
        optimalPlantingDate: 'April 1 - May 1',
        growthSeason: '2-3 years for mature roots',
        sunlight: 'Full Sun to Partial Shade',
        watering: 'Moderate; water during dry spells.',
        soilType: 'Rich, sandy soil',
        fertilization: 'Minimal; apply compost at planting.',
        pruning: 'Not required.',
        pests: 'Minimal; generally pest-free.',
        harvesting: 'Harvest roots in the second or third year.',
        storage: 'Dry roots for long-term use.',
        companionPlants: 'Chamomile, Lavender.',
        varieties: 'Wild Licorice, European Licorice',
    },
    {
        id: 101,
        name: 'Sponge Gourd Luffa',
        description: 'Vigorous climbing plant producing fibrous fruits.',
        plantingZone: 'Zones 7-10',
        optimalPlantingDate: 'April 15 - May 15',
        growthSeason: '120-150 days',
        sunlight: 'Full Sun',
        watering: 'Moderate; keep soil evenly moist.',
        soilType: 'Rich, well-drained soil',
        fertilization: 'Fertilize every 3 weeks with balanced fertilizer.',
        pruning: 'Prune vines to control growth.',
        pests: 'Aphids, cucumber beetles. Use organic pest control.',
        harvesting: 'Harvest young fruits for eating or mature ones for sponges.',
        storage: 'Dry thoroughly for use as sponges.',
        companionPlants: 'Corn, Beans.',
        varieties: 'Smooth Luffa, Ridged Luffa',
    },
    {
        id: 102,
        name: 'Tricolor Romaine Lettuce Seed Tape',
        description: 'Convenient seed tape for growing colorful romaine lettuce.',
        plantingZone: 'Zones 4-9',
        optimalPlantingDate: 'March 1 - March 31',
        growthSeason: '60-80 days',
        sunlight: 'Full Sun to Partial Shade',
        watering: 'Moderate; water consistently.',
        soilType: 'Rich, well-drained soil',
        fertilization: 'Fertilize lightly every 3 weeks.',
        pruning: 'Harvest outer leaves as needed.',
        pests: 'Slugs, aphids. Use organic pest control.',
        harvesting: 'Harvest leaves when they are 4-6 inches long.',
        storage: 'Refrigerate for up to 5 days.',
        companionPlants: 'Carrots, Onions.',
        varieties: 'Tricolor Blend',
    },
    {
        id: 103,
        name: 'Lamb’s Ear',
        description: 'Perennial plant with soft, fuzzy leaves.',
        plantingZone: 'Zones 4-8',
        optimalPlantingDate: 'April 1 - April 30',
        growthSeason: 'Perennial',
        sunlight: 'Full Sun to Partial Shade',
        watering: 'Low; drought-tolerant.',
        soilType: 'Well-drained, sandy soil',
        fertilization: 'Minimal; thrives in poor soil.',
        pruning: 'Remove dead leaves regularly.',
        pests: 'Generally pest-free.',
        harvesting: 'Not typically harvested; used as ornamental.',
        storage: 'Not applicable.',
        companionPlants: 'Lavender, Yarrow.',
        varieties: 'Big Ears, Silver Carpet',
    },
    {
        id: 104,
        name: 'Mullein',
        description: 'Tall biennial plant with medicinal leaves and flowers.',
        plantingZone: 'Zones 3-9',
        optimalPlantingDate: 'April 1 - April 30',
        growthSeason: '2 years',
        sunlight: 'Full Sun',
        watering: 'Low; drought-tolerant.',
        soilType: 'Well-drained, sandy soil',
        fertilization: 'Minimal; add compost at planting.',
        pruning: 'Remove spent flower stalks.',
        pests: 'Generally pest-free.',
        harvesting: 'Harvest leaves and flowers as needed.',
        storage: 'Dry leaves and flowers for long-term use.',
        companionPlants: 'Chamomile, Lavender.',
        varieties: 'Common Mullein, Greek Mullein',
    },
    {
        id: 105,
        name: 'Southern Giant Curled Mustard',
        description: 'Fast-growing leafy green with spicy flavor.',
        plantingZone: 'Zones 6-9',
        optimalPlantingDate: 'March 15 - April 15',
        growthSeason: '40-60 days',
        sunlight: 'Full Sun to Partial Shade',
        watering: 'Moderate; water consistently.',
        soilType: 'Rich, well-drained soil',
        fertilization: 'Fertilize lightly every 2 weeks.',
        pruning: 'Harvest outer leaves to encourage growth.',
        pests: 'Flea beetles, aphids. Use organic pest control.',
        harvesting: 'Harvest leaves when they are young and tender.',
        storage: 'Refrigerate for up to 5 days.',
        companionPlants: 'Radishes, Carrots.',
        varieties: 'Southern Giant',
    },
    {
        id: 106,
        name: 'Giant of Italy Parsley',
        description: 'Robust Italian parsley variety with large leaves.',
        plantingZone: 'Zones 4-9',
        optimalPlantingDate: 'March 1 - March 31',
        growthSeason: '60-90 days',
        sunlight: 'Full Sun to Partial Shade',
        watering: 'Moderate; keep soil evenly moist.',
        soilType: 'Rich, loamy soil',
        fertilization: 'Fertilize lightly every 3 weeks.',
        pruning: 'Harvest outer leaves to promote new growth.',
        pests: 'Aphids, leaf miners. Use organic pest deterrents.',
        harvesting: 'Harvest leaves as needed.',
        storage: 'Refrigerate for up to a week.',
        companionPlants: 'Carrots, Tomatoes.',
        varieties: 'Flat Leaf, Curly Leaf',
    },
    {
        id: 107,
        name: 'Sugar Bon Peas',
        description: 'Compact pea variety with sweet, edible pods.',
        plantingZone: 'Zones 3-8',
        optimalPlantingDate: 'March 15 - April 15',
        growthSeason: '60-70 days',
        sunlight: 'Full Sun',
        watering: 'Moderate; water consistently.',
        soilType: 'Loamy, well-drained soil',
        fertilization: 'Fertilize at planting and mid-season.',
        pruning: 'Not required.',
        pests: 'Aphids, pea weevils. Use organic sprays.',
        harvesting: 'Harvest pods when they are 3-4 inches long.',
        storage: 'Refrigerate for up to a week.',
        companionPlants: 'Carrots, Radishes.',
        varieties: 'Sugar Bon Original',
    },
    {
        id: 108,
        name: 'Japanese Wasabi Radish',
        description: 'Spicy radish variety resembling wasabi in flavor.',
        plantingZone: 'Zones 4-9',
        optimalPlantingDate: 'March 20 - April 20',
        growthSeason: '50-60 days',
        sunlight: 'Full Sun',
        watering: 'Moderate; water consistently.',
        soilType: 'Rich, loamy soil',
        fertilization: 'Fertilize lightly at planting.',
        pruning: 'Not required.',
        pests: 'Flea beetles, aphids. Use organic pest control.',
        harvesting: 'Harvest roots when they are 3-4 inches long.',
        storage: 'Refrigerate for up to 2 weeks.',
        companionPlants: 'Carrots, Lettuce.',
        varieties: 'Wasabi Radish Original',
    },
    {
        id: 109,
        name: 'Stiff Goldenrod',
        description: 'Native perennial with bright yellow flowers.',
        plantingZone: 'Zones 3-8',
        optimalPlantingDate: 'March 1 - March 31',
        growthSeason: 'Perennial',
        sunlight: 'Full Sun',
        watering: 'Low; drought-tolerant.',
        soilType: 'Sandy, well-drained soil',
        fertilization: 'Minimal; thrives in poor soils.',
        pruning: 'Cut back in late fall.',
        pests: 'Generally pest-free.',
        harvesting: 'Not typically harvested; used as ornamental.',
        storage: 'Not applicable.',
        companionPlants: 'Coneflowers, Black-eyed Susans.',
        varieties: 'Solidago Rigida',
    },
];

// DOM Elements
const plantsContainer = document.getElementById('plants-carousel');
const modal = document.getElementById('plant-modal');
const modalCloseButton = document.querySelector('.close-modal');
const calendarTable = document.getElementById('calendar-table');
const calendarControls = document.getElementById('calendar-controls');
const calendarPreview = document.getElementById('calendar-preview');
const generateCalendarButton = document.getElementById('generate-calendar');
const prevMonthButton = document.getElementById('prev-month');
const nextMonthButton = document.getElementById('next-month');

// Open Modal
function openPlantModal(plant) {
    document.getElementById('modal-plant-name').textContent = plant.name;
    document.getElementById('modal-plant-description').textContent = plant.description;

    const detailsList = document.getElementById('modal-plant-details');
    detailsList.innerHTML = `
        <li><strong>Planting Zone:</strong> ${plant.plantingZone}</li>
        <li><strong>Optimal Planting Date:</strong> ${plant.optimalPlantingDate}</li>
        <li><strong>Growth Season:</strong> ${plant.growthSeason}</li>
        <li><strong>Sunlight:</strong> ${plant.sunlight}</li>
        <li><strong>Watering:</strong> ${plant.watering}</li>
        <li><strong>Soil Type:</strong> ${plant.soilType}</li>
        <li><strong>Fertilization:</strong> ${plant.fertilization}</li>
        <li><strong>Pruning:</strong> ${plant.pruning}</li>
        <li><strong>Pests:</strong> ${plant.pests}</li>
        <li><strong>Harvesting:</strong> ${plant.harvesting}</li>
        <li><strong>Storage:</strong> ${plant.storage}</li>
        <li><strong>Companion Plants:</strong> ${plant.companionPlants}</li>
        <li><strong>Varieties:</strong> ${plant.varieties}</li>
    `;

    modal.classList.add('visible');
}

// Close Modal
modalCloseButton.addEventListener('click', () => {
    modal.classList.remove('visible');
});

// Calendar Setup
const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
];
let currentMonth = 0; // Start with January
let currentYear = 2025; // Restrict to 2025
let selectedPlants = [];
let accessToken = '';

// Populate Plant Selector
function populatePlantSelector() {
    plants.forEach((plant) => {
        const plantCard = document.createElement('div');
        plantCard.className = 'plant-card';
        plantCard.dataset.id = plant.id;
        plantCard.innerHTML = `<h4>${plant.name}</h4><p>${plant.description}</p>`;

        // Handle Plant Selection
        plantCard.addEventListener('click', () => {
            plantCard.classList.toggle('selected');
            const isSelected = plantCard.classList.contains('selected');

            if (isSelected) {
                selectedPlants.push(plant);
            } else {
                selectedPlants = selectedPlants.filter((p) => p.id !== plant.id);
            }
            generateCalendar(currentMonth, currentYear);
        });

        plantsContainer.appendChild(plantCard);
    });
}

// Generate Calendar
function generateCalendar(month, year) {
    if (year !== 2025) return;

    calendarTable.innerHTML = '';
    const monthTitle = document.getElementById('current-month');
    monthTitle.textContent = `${months[month]} ${year}`;

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const headerRow = document.createElement('tr');
    daysOfWeek.forEach((day) => {
        const th = document.createElement('th');
        th.textContent = day;
        headerRow.appendChild(th);
    });
    calendarTable.appendChild(headerRow);

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let row = document.createElement('tr');
    for (let i = 0; i < firstDay; i++) {
        row.appendChild(document.createElement('td'));
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const cell = document.createElement('td');
        cell.textContent = day;
        cell.classList.add('calendar-cell');
        cell.dataset.date = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        row.appendChild(cell);

        if ((firstDay + day) % 7 === 0 || day === daysInMonth) {
            calendarTable.appendChild(row);
            row = document.createElement('tr');
        }
    }

    populateCalendarEvents();
}

// Populate Calendar Events
function populateCalendarEvents() {
    document.querySelectorAll('.calendar-cell').forEach((cell) => {
        const cellDate = cell.dataset.date;

        selectedPlants.forEach((plant) => {
            if (matchesPlantingDate(plant, cellDate)) {
                const event = document.createElement('div');
                event.classList.add('calendar-event');
                event.textContent = plant.name;

                const tooltip = document.createElement('div');
                tooltip.classList.add('tooltip-content');
                tooltip.innerHTML = `
                    <p><strong>Name:</strong> ${plant.name}</p>
                    <p><strong>Description:</strong> ${plant.description}</p>
                    <p><strong>Planting Zone:</strong> ${plant.plantingZone}</p>
                    <p><strong>Optimal Planting Date:</strong> ${plant.optimalPlantingDate}</p>
                    <p><strong>Growth Season:</strong> ${plant.growthSeason}</p>
                    <p><strong>Sunlight:</strong> ${plant.sunlight}</p>
                    <p><strong>Watering:</strong> ${plant.watering}</p>
                    <p><strong>Soil Type:</strong> ${plant.soilType}</p>
                    <p><strong>Fertilization:</strong> ${plant.fertilization}</p>
                    <p><strong>Pruning:</strong> ${plant.pruning}</p>
                    <p><strong>Pests:</strong> ${plant.pests}</p>
                    <p><strong>Harvesting:</strong> ${plant.harvesting}</p>
                    <p><strong>Storage:</strong> ${plant.storage}</p>
                    <p><strong>Companion Plants:</strong> ${plant.companionPlants}</p>
                    <p><strong>Varieties:</strong> ${plant.varieties}</p>
                `;
                event.appendChild(tooltip);

                // Tooltip visibility on hover
                event.addEventListener('mouseenter', () => {
                    tooltip.style.visibility = 'visible';
                    tooltip.style.opacity = '1';
                });

                event.addEventListener('mouseleave', () => {
                    tooltip.style.visibility = 'hidden';
                    tooltip.style.opacity = '0';
                });

                cell.appendChild(event);
            }
        });
    });
}

// Scroll the carousel
function scrollCarousel(direction) {
    const scrollAmount = 300; // Adjust this value based on the width of each plant card
    const carousel = document.getElementById('plants-carousel');

    if (carousel) {
        carousel.scrollBy({
            left: direction * scrollAmount,
            behavior: 'smooth',
        });
    } else {
        console.error('Carousel container not found!');
    }
}

// Attach click events for carousel navigation
document.querySelector('.carousel-arrow.left').addEventListener('click', () => scrollCarousel(-1));
document.querySelector('.carousel-arrow.right').addEventListener('click', () => scrollCarousel(1));

// Handle Month Navigation
prevMonthButton.addEventListener('click', () => {
    currentMonth = (currentMonth - 1 + 12) % 12;
    generateCalendar(currentMonth, currentYear);
});

nextMonthButton.addEventListener('click', () => {
    currentMonth = (currentMonth + 1) % 12;
    generateCalendar(currentMonth, currentYear);
});

// Check if a Plant Matches the Calendar Date
function matchesPlantingDate(plant, date) {
    const [startMonth, startDay] = plant.optimalPlantingDate.split(' - ')[0].split(' ');
    const [endMonth, endDay] = plant.optimalPlantingDate.split(' - ')[1].split(' ');

    const startDate = new Date(`2025 ${startMonth} ${startDay}`);
    const endDate = new Date(`2025 ${endMonth} ${endDay}`);
    const targetDate = new Date(date);

    return targetDate >= startDate && targetDate <= endDate;
}

// Google Calendar Integration
function createGoogleCalendar() {
    const CLIENT_ID = '49132421966-cp58gf3f85p81efivme83t2nafatm5si.apps.googleusercontent.com';
    const REDIRECT_URI = 'https://oldschoolclassic.github.io/Alona-sGardenCalendarGenerator/';
    const SCOPES = 'https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events';

    if (!accessToken) {
        const authUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(
            REDIRECT_URI
        )}&response_type=token&scope=${encodeURIComponent(SCOPES)}&prompt=consent`;
        window.location.href = authUrl; // Redirect for authentication
        return;
    }

    fetch('https://www.googleapis.com/calendar/v3/calendars', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            summary: 'Garden Calendar',
            timeZone: 'UTC',
        }),
    })
        .then((response) => response.json())
        .then((calendarData) => {
            const calendarId = calendarData.id;
            alert(`Google Calendar created successfully! ID: ${calendarId}`);
            addEventsToCalendar(calendarId); // Add events to the calendar
        })
        .catch((error) => {
            console.error('Error creating calendar:', error);
            alert('Failed to create Google Calendar.');
        });
}

// Add Events to Calendar
function addEventsToCalendar(calendarId) {
    const promises = [];

    selectedPlants.forEach((plant) => {
        const [startMonth, startDay] = plant.optimalPlantingDate.split(' - ')[0].split(' ');
        const [endMonth, endDay] = plant.optimalPlantingDate.split(' - ')[1].split(' ');

        const startDate = new Date(`2025 ${startMonth} ${startDay}`);
        const endDate = new Date(`2025 ${endMonth} ${endDay}`);

        for (let date = new Date(startDate); date <= endDate; date.setDate(date.getDate() + 1)) {
            const eventDate = new Date(date).toISOString().split('T')[0]; // Format as YYYY-MM-DD

            const event = {
                summary: `${plant.name} Planting`,
                description: `
                    Name: ${plant.name}
                    Description: ${plant.description}
                    Planting Zone: ${plant.plantingZone}
                    Growth Season: ${plant.growthSeason}
                    Sunlight: ${plant.sunlight}
                    Watering: ${plant.watering}
                    Soil Type: ${plant.soilType}
                    Fertilization: ${plant.fertilization}
                    Pruning: ${plant.pruning}
                    Pests: ${plant.pests}
                    Harvesting: ${plant.harvesting}
                    Storage: ${plant.storage}
                    Companion Plants: ${plant.companionPlants}
                    Varieties: ${plant.varieties}
                `,
                start: {
                    date: eventDate,
                },
                end: {
                    date: eventDate,
                },
            };

            const promise = fetch(`https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(event),
            })
                .then((response) => {
                    if (!response.ok) throw new Error(`Failed to create event: ${response.statusText}`);
                    return response.json();
                })
                .then((data) => console.log(`Event created: ${data.id}`))
                .catch(console.error);

            promises.push(promise);
        }
    });

    Promise.all(promises)
        .then(() => {
            alert('All events have been added to the calendar!');
            window.open(`https://calendar.google.com/calendar/u/0/r?cid=${calendarId}`, '_blank'); // Open Google Calendar
        })
        .catch(console.error);
}
function addEventsToCalendar(calendarId) {
    const promises = [];

    selectedPlants.forEach((plant) => {
        const [startMonth, startDay] = plant.optimalPlantingDate.split(' - ')[0].split(' ');
        const [endMonth, endDay] = plant.optimalPlantingDate.split(' - ')[1].split(' ');

        const startDate = new Date(`2025 ${startMonth} ${startDay}`);
        const endDate = new Date(`2025 ${endMonth} ${endDay}`);

        for (let date = new Date(startDate); date <= endDate; date.setDate(date.getDate() + 1)) {
            const eventDate = new Date(date).toISOString().split('T')[0]; // Format as YYYY-MM-DD

            const event = {
                summary: `${plant.name} Planting`,
                description: `
                    Name: ${plant.name}
                    Description: ${plant.description}
                    Planting Zone: ${plant.plantingZone}
                    Growth Season: ${plant.growthSeason}
                    Sunlight: ${plant.sunlight}
                    Watering: ${plant.watering}
                    Soil Type: ${plant.soilType}
                    Fertilization: ${plant.fertilization}
                    Pruning: ${plant.pruning}
                    Pests: ${plant.pests}
                    Harvesting: ${plant.harvesting}
                    Storage: ${plant.storage}
                    Companion Plants: ${plant.companionPlants}
                    Varieties: ${plant.varieties}
                `,
                start: {
                    date: eventDate,
                },
                end: {
                    date: eventDate,
                },
            };

            const promise = fetch(`https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(event),
            })
                .then((response) => {
                    if (!response.ok) throw new Error(`Failed to create event: ${response.statusText}`);
                    return response.json();
                })
                .then((data) => console.log(`Event created: ${data.id}`))
                .catch(console.error);

            promises.push(promise);
        }
    });

    Promise.all(promises)
        .then(() => {
            alert('All events have been added to the calendar!');
            window.open(`https://calendar.google.com/calendar/u/0/r?cid=${calendarId}`, '_blank'); // Open Google Calendar
        })
        .catch(console.error);
}
function addEventsToCalendar(calendarId) {
    const promises = [];

    selectedPlants.forEach((plant) => {
        const [startMonth, startDay] = plant.optimalPlantingDate.split(' - ')[0].split(' ');
        const [endMonth, endDay] = plant.optimalPlantingDate.split(' - ')[1].split(' ');

        const startDate = new Date(`2025 ${startMonth} ${startDay}`);
        const endDate = new Date(`2025 ${endMonth} ${endDay}`);

        for (let date = new Date(startDate); date <= endDate; date.setDate(date.getDate() + 1)) {
            const eventDate = new Date(date).toISOString().split('T')[0]; // Format as YYYY-MM-DD

            const event = {
                summary: `${plant.name} Planting`,
                description: `
                    Name: ${plant.name}
                    Description: ${plant.description}
                    Planting Zone: ${plant.plantingZone}
                    Growth Season: ${plant.growthSeason}
                    Sunlight: ${plant.sunlight}
                    Watering: ${plant.watering}
                    Soil Type: ${plant.soilType}
                    Fertilization: ${plant.fertilization}
                    Pruning: ${plant.pruning}
                    Pests: ${plant.pests}
                    Harvesting: ${plant.harvesting}
                    Storage: ${plant.storage}
                    Companion Plants: ${plant.companionPlants}
                    Varieties: ${plant.varieties}
                `,
                start: {
                    date: eventDate,
                },
                end: {
                    date: eventDate,
                },
            };

            const promise = fetch(`https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(event),
            })
                .then((response) => {
                    if (!response.ok) throw new Error(`Failed to create event: ${response.statusText}`);
                    return response.json();
                })
                .then((data) => console.log(`Event created: ${data.id}`))
                .catch(console.error);

            promises.push(promise);
        }
    });

    Promise.all(promises)
        .then(() => {
            alert('All events have been added to the calendar!');
            window.open(`https://calendar.google.com/calendar/u/0/r?cid=${calendarId}`, '_blank'); // Open Google Calendar
        })
        .catch(console.error);
}

// Handle OAuth Redirect Response
function handleOAuthRedirect() {
    const hash = window.location.hash;
    if (hash) {
        const params = new URLSearchParams(hash.substring(1));
        accessToken = params.get('access_token');
        if (accessToken) {
            console.log('Access Token Retrieved:', accessToken);
            alert('Google Authorization Successful!');
        } else {
            alert('Authorization failed. Access token not found.');
            console.error('Access token not found in redirect response.');
        }
    }
}

// Call handleOAuthRedirect on page load
window.onload = handleOAuthRedirect;

// Attach Event Listeners
generateCalendarButton.addEventListener('click', createGoogleCalendar);

// Initialize App
function initializeApp() {
    populatePlantSelector();
    generateCalendar(currentMonth, currentYear);
}

// Run App
initializeApp();

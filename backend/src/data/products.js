export default [
  {
    id: 1,
    name: 'Chopped Onion',
    slug: 'chopped-onion',
    urdu: 'کٹی ہوئی پیاز',
    cat: 'Pre-cut',
    icon: '🧅',
    image: 'assets/products/chopped-onion.webp',
    description: 'Fresh onions washed and sliced into even strips, ready for curries, salads and frying.',
    shortDescription: 'Freshly diced onions prepared from top-tier local produce, washed and cut into uniform pieces for effortless curries, karahis, and biryani gravies.',
    nutritionSummary: {
      calories: '40 kcal',
      carbs: '9.3g',
      protein: '1.1g',
      fat: '0.1g',
      fiber: '1.7g',
      keyVitamins: 'Vitamin C, Vitamin B6, Folate, Potassium'
    },
    nutrients: [
      { name: 'Quercetin', amount: '20 mg', benefit: 'Can contribute to antioxidant defense and cellular wellness.' },
      { name: 'Dietary Fiber', amount: '1.7 g', benefit: 'May support healthy digestion and gut microbiome balance.' },
      { name: 'Vitamin C', amount: '7.4 mg', benefit: 'Is a source of essential vitamins supporting immune function.' }
    ],
    healthBenefits: [
      { title: 'Heart Wellness Support', description: 'Contains natural flavonoid compounds like quercetin that may support cardiovascular health.' },
      { title: 'Digestive Health', description: 'Provides dietary fiber and natural prebiotics that can contribute to gut health.' },
      { title: 'Cellular Defense', description: 'Rich in antioxidants that may help protect cells against daily oxidative stress.' }
    ],
    cutDescription: 'Uniform medium-diced cut (approx. 5mm x 5mm) engineered to melt evenly into handi bases and curry gravies without tearing or burning.',
    cookingUses: [
      { title: 'Handi & Karahi Base', description: 'Saute in ghee or oil for a golden gravy foundation in chicken, mutton, or lentil curries.' },
      { title: 'Kachumber & Salads', description: 'Toss directly with chopped tomatoes, cucumber, lemon juice, and mint for fresh raita.' },
      { title: 'Omelettes & Stuffing', description: 'Add to morning eggs, samosa fillings, or Seekh kabab mixtures for instant crunch.' }
    ],
    storageInstructions: 'Refrigerate immediately between 2°C and 4°C in its original airtight packaging. Best consumed within 3 to 4 days of delivery.',
    hygieneInformation: 'Triple-washed in chilled ozone-sanitized water, machine-diced in a climate-controlled facility, and packed in food-grade eco containers with zero preservatives.',
    faq: [
      { question: 'Will these chopped onions cause eye irritation?', answer: 'No! They are already peeled, washed, and diced, saving your eyes from tear-inducing onion fumes.' },
      { question: 'Do I need to wash them before adding to the handi?', answer: 'Not at all. Our onions are pre-washed in sanitized water and ready for immediate cooking.' },
      { question: 'How long do they stay fresh after opening?', answer: 'Keep sealed in the refrigerator and use within 3 days for maximum flavor and aroma.' }
    ],
    prices: { '250g': 99, '500g': 179 },
    sale: true
  },
  {
    id: 2,
    name: 'Lady Finger Slices',
    slug: 'lady-finger-slices',
    urdu: 'بھِنڈی سلائس',
    cat: 'Pre-cut',
    icon: '🌿',
    image: 'assets/products/lady-finger.webp',
    description: 'Tender green lady fingers cleaned and cut into uniform rounds for quick cooking.',
    shortDescription: 'Tender, fresh green okra washed, stem-trimmed, and sliced into round pieces perfect for crispy bhindi fry, masala bhindi, or kurkuri bhindi.',
    nutritionSummary: {
      calories: '33 kcal',
      carbs: '7.5g',
      protein: '1.9g',
      fat: '0.2g',
      fiber: '3.2g',
      keyVitamins: 'Vitamin K, Vitamin C, Folate, Calcium'
    },
    nutrients: [
      { name: 'Soluble Mucilage Fiber', amount: '3.2 g', benefit: 'May support smooth digestion and blood sugar management.' },
      { name: 'Folate (Vitamin B9)', amount: '60 mcg', benefit: 'Can contribute to normal cell formation and tissue growth.' },
      { name: 'Vitamin K', amount: '31.3 mcg', benefit: 'Is a source of nutrients contributing to normal blood clotting and bone maintenance.' }
    ],
    healthBenefits: [
      { title: 'Glycemic Balance Support', description: 'The rich soluble fiber content may help manage glucose absorption after meals.' },
      { title: 'Digestive Comfort', description: 'Okra mucilage coats the digestive tract, which can support gastrointestinal comfort.' },
      { title: 'Bone & Immunity Support', description: 'Contains Vitamin K, Vitamin C, and calcium to support skeletal and immune health.' }
    ],
    cutDescription: 'Precision 8mm cross-section slices cut cleanly to reduce stickiness and ensure crisp frying.',
    cookingUses: [
      { title: 'Bhindi Masala', description: 'Shallow fry with onions, cumin, green chilies, and amchur for classic home-style bhindi.' },
      { title: 'Crispy Kurkuri Bhindi', description: 'Coat with besan (gram flour) and spices, then air-fry or deep-fry for a crunchy snack.' },
      { title: 'Sambar & Stews', description: 'Add directly to boiling dal or vegetable sambar during the final 10 minutes.' }
    ],
    storageInstructions: 'Keep refrigerated at 2°C to 5°C in a dry, ventilated container. Keep dry to maintain firmness for up to 4 days.',
    hygieneInformation: 'Washed in sanitized water, thoroughly air-dried before slicing to prevent sliminess, and packed in food-safe containers.',
    faq: [
      { question: 'Why are these slices less slimy than home-cut bhindi?', answer: 'We thoroughly dry the pods after washing and before slicing, which dramatically reduces stickiness.' },
      { question: 'Can I freeze these bhindi slices?', answer: 'For best texture, we recommend fresh refrigeration. If freezing, saute lightly first.' },
      { question: 'Are these ready to cook?', answer: 'Yes, completely stem-trimmed, washed, dried, and sliced.' }
    ],
    prices: { '250g': 169, '500g': 299 },
    sale: true
  },
  {
    id: 3,
    name: 'Cauliflower Florets',
    slug: 'cauliflower-florets',
    urdu: 'پھول گوبھی',
    cat: 'Pre-cut',
    icon: '🥦',
    image: 'assets/products/cauliflower.webp',
    description: 'Fresh cauliflower separated into convenient florets for curries, roasting and stir-fries.',
    shortDescription: 'Crisp white cauliflower heads separated into stem-trimmed bite-sized florets, ready for aloo gobi, vegetable korma, or low-carb roasting.',
    nutritionSummary: {
      calories: '25 kcal',
      carbs: '5.0g',
      protein: '1.9g',
      fat: '0.3g',
      fiber: '2.0g',
      keyVitamins: 'Vitamin C, Vitamin K, Choline, Vitamin B6'
    },
    nutrients: [
      { name: 'Sulforaphane', amount: '12 mg', benefit: 'Can contribute to antioxidant enzyme activation and cellular health.' },
      { name: 'Choline', amount: '45 mg', benefit: 'Is a source of essential nutrients supporting memory and nerve signaling.' },
      { name: 'Vitamin C', amount: '48.2 mg', benefit: 'Provides over 70% daily value supporting skin collagen and immunity.' }
    ],
    healthBenefits: [
      { title: 'Cellular Defense Support', description: 'Packed with glucosinolates and sulforaphane that may support cellular detoxification.' },
      { title: 'Cognitive Wellness', description: 'Contains choline, a vital nutrient that can support brain development and nervous function.' },
      { title: 'Weight & Low-Carb Dieting', description: 'Low calorie density makes it a fantastic substitute for rice, flour, and potatoes.' }
    ],
    cutDescription: 'Hand-trimmed 3-4cm uniform florets free from thick woody stalks and outer leaves.',
    cookingUses: [
      { title: 'Aloo Gobi Matar', description: 'Simmer with potatoes, green peas, turmeric, and garam masala for iconic curry.' },
      { title: 'Oven Roasted Gobi', description: 'Toss with olive oil, cumin, and garlic powder, then roast at 200°C until golden brown.' },
      { title: 'Cauliflower Rice', description: 'Grate or pulse in a processor for a quick low-carb rice alternative.' }
    ],
    storageInstructions: 'Refrigerate in a breathable container at 2°C to 4°C. Consume within 4 to 5 days.',
    hygieneInformation: 'Inspected floret by floret to remove insects and blemishes, triple-washed in sanitized water, and drained before packing.',
    faq: [
      { question: 'Are these florets inspected for bugs?', answer: 'Yes! Every floret is hand-cut and inspected under bright lighting before triple washing.' },
      { question: 'Do I need to soak them in saltwater?', answer: 'No, our rigorous triple-sanitizing wash already guarantees clean, pest-free florets.' },
      { question: 'Can I bake these directly?', answer: 'Yes, toss with oil and seasonings and roast directly on a baking sheet.' }
    ],
    prices: { '250g': 169, '500g': 299 }
  },
  {
    id: 4,
    name: 'Carrot Julienne',
    slug: 'carrot-julienne',
    urdu: 'گاجر جولین',
    cat: 'Pre-cut',
    icon: '🥕',
    image: 'assets/products/carrot-julienne.webp',
    description: 'Crisp carrots cut into thin julienne strips for Chinese dishes, salads and garnishing.',
    shortDescription: 'Uniform matchstick-cut fresh carrots, washed and ready to toss into stir-fries, chow mein, coleslaws, and vibrant salads.',
    nutritionSummary: {
      calories: '41 kcal',
      carbs: '9.6g',
      protein: '0.9g',
      fat: '0.2g',
      fiber: '2.8g',
      keyVitamins: 'Vitamin A, Vitamin K1, Vitamin B6, Potassium'
    },
    nutrients: [
      { name: 'Beta-Carotene', amount: '8285 mcg', benefit: 'Converts to Vitamin A, contributing to healthy vision and skin maintenance.' },
      { name: 'Dietary Fiber', amount: '2.8 g', benefit: 'May support healthy digestion and gut microbiome balance.' },
      { name: 'Potassium', amount: '320 mg', benefit: 'Is a source of essential minerals supporting electrolyte balance.' }
    ],
    healthBenefits: [
      { title: 'Eye & Vision Care', description: 'Rich in beta-carotene which the body converts into Vitamin A, supporting normal vision.' },
      { title: 'Digestive Wellness', description: 'Provides natural soluble and insoluble fiber that may support regular digestion.' },
      { title: 'Cellular Protection', description: 'Contains natural carotenoids and polyphenols that can help protect cells from oxidative damage.' }
    ],
    cutDescription: 'Precision matchstick julienne cut (approx. 2mm x 2mm x 40mm) designed for quick wok cooking and crunchy salad texture.',
    cookingUses: [
      { title: 'Chinese Stir-Fries & Noodles', description: 'Toss directly into wok for chicken chow mein, fried rice, or vegetable Manchurian.' },
      { title: 'Fresh Salads & Wraps', description: 'Add crisp crunch and bright colour to rolls, kachumber, or mayo coleslaw.' },
      { title: 'Soup & Stock Garnishing', description: 'Simmer briefly in hot sour soup or clear vegetable broths.' }
    ],
    storageInstructions: 'Refrigerate immediately upon receipt between 2°C to 4°C. Keep in original airtight container. Best consumed within 3 to 4 days.',
    hygieneInformation: 'Triple-washed in chilled ozone-purified water, peeled under strict food safety standards, and packed in food-grade eco containers. Zero added preservatives.',
    faq: [
      { question: 'Do I need to wash Carrot Julienne before cooking?', answer: 'No, our carrots are triple-washed in sanitized water and ready to cook or eat raw straight out of the box.' },
      { question: 'How long do these stay crunchy in the fridge?', answer: 'When kept sealed in the refrigerator at 2-4°C, they retain optimum crispness for up to 4 days.' },
      { question: 'Are these suitable for eating raw in salads?', answer: 'Yes! They are hygienically prepared and perfect for raw salads, wraps, and garnishes.' }
    ],
    prices: { '250g': 149, '500g': 269 }
  },
  {
    id: 5,
    name: 'Peeled Garlic',
    slug: 'peeled-garlic',
    urdu: 'چھلا ہوا لہسن',
    cat: 'Essentials',
    icon: '🧄',
    image: 'assets/products/peeled-garlic.webp',
    description: 'Clean, carefully peeled garlic cloves that save preparation time in everyday cooking.',
    shortDescription: 'Plump, aromatic whole garlic cloves peeled and root-trimmed, eliminating the tedious task of peeling garlic for daily meals.',
    nutritionSummary: {
      calories: '149 kcal',
      carbs: '33.1g',
      protein: '6.4g',
      fat: '0.5g',
      fiber: '2.1g',
      keyVitamins: 'Vitamin B6, Vitamin C, Manganese, Selenium'
    },
    nutrients: [
      { name: 'Allicin Compounds', amount: 'Active precursor', benefit: 'Can contribute to natural antibacterial and immune support when crushed.' },
      { name: 'Manganese', amount: '1.6 mg', benefit: 'Supports enzyme systems and connective tissue formation.' },
      { name: 'Vitamin B6', amount: '1.2 mg', benefit: 'Is a source of nutrients vital for energy metabolism and nervous system health.' }
    ],
    healthBenefits: [
      { title: 'Cardiovascular Support', description: 'Allicin and sulfur compounds in garlic may support healthy blood pressure and blood lipid balance.' },
      { title: 'Immune Resilience', description: 'Traditionally valued for antimicrobial properties that can support immune defense.' },
      { title: 'Antioxidant Wealth', description: 'Abundant organosulfur compounds protect tissues against free radical stress.' }
    ],
    cutDescription: 'Whole undamaged peeled garlic cloves with outer husk and hard stem bases clean-trimmed.',
    cookingUses: [
      { title: 'Garlic Paste & Ginger-Garlic Base', description: 'Blend with peeled ginger and oil for homemade long-lasting ginger-garlic paste.' },
      { title: 'Tadka / Tempering', description: 'Slice thin and brown in hot oil/ghee for dal, spinach, or karahi tadka.' },
      { title: 'Roasting & Gravies', description: 'Crush or roast whole cloves for rich gravies, marinades, and garlic butter.' }
    ],
    storageInstructions: 'Store in an airtight container in the refrigerator at 2°C to 4°C. Keeps fresh for up to 7 to 10 days.',
    hygieneInformation: 'Dry-peeled mechanically and hand-finished, washed in food-grade antimicrobial rinse, and sealed air-tight.',
    faq: [
      { question: 'Does peeled garlic lose its flavor?', answer: 'Not when sealed! Our airtight food-grade packaging preserves natural garlic essential oils and pungent aroma.' },
      { question: 'Are chemicals used to peel the garlic?', answer: 'Never! We use air-jet skin removal followed by hand-inspection and sanitized water rinsing.' },
      { question: 'Can I freeze these garlic cloves?', answer: 'Yes, whole peeled cloves freeze exceptionally well for up to 3 months.' }
    ],
    prices: { '200g': 269, '400g': 499 },
    sale: true
  },
  {
    id: 6,
    name: 'Chopped Spinach',
    slug: 'chopped-spinach',
    urdu: 'کٹی ہوئی پالک',
    cat: 'Leafy',
    icon: '🥬',
    image: 'assets/products/chopped-spinach.webp',
    description: 'Fresh spinach leaves washed and chopped, ready for palak dishes, soups and fillings.',
    shortDescription: 'Farm-fresh green spinach leaves thoroughly de-stemmed, washed free of sand, and chopped fine for palak paneer, palak gosht, or saag.',
    nutritionSummary: {
      calories: '23 kcal',
      carbs: '3.6g',
      protein: '2.9g',
      fat: '0.4g',
      fiber: '2.2g',
      keyVitamins: 'Vitamin A, Vitamin C, Vitamin K1, Iron, Folate'
    },
    nutrients: [
      { name: 'Dietary Iron', amount: '2.7 mg', benefit: 'Can contribute to normal hemoglobin production and red blood cell formation.' },
      { name: 'Lutein & Zeaxanthin', amount: '12.2 mg', benefit: 'May support eye health and macula protection against blue light.' },
      { name: 'Vitamin K1', amount: '483 mcg', benefit: 'Provides over 400% daily value supporting bone mineralization and coagulation.' }
    ],
    healthBenefits: [
      { title: 'Blood & Vitality Support', description: 'Rich in dietary iron and folate which contribute to energy levels and blood health.' },
      { title: 'Ocular Protection', description: 'High concentrations of carotenoid pigments support vision and macular integrity.' },
      { title: 'Bone Density Maintenance', description: 'Vitamin K and calcium work together to support strong skeletal structure.' }
    ],
    cutDescription: 'Medium-fine shredded spinach cut (approx. 10mm cross-cuts) without thick fibrous stems.',
    cookingUses: [
      { title: 'Palak Paneer / Palak Gosht', description: 'Wilt in hot pan with onion-tomato masala or blanch and puree for creamy restaurant saag.' },
      { title: 'Pakoras & Snack Fillings', description: 'Mix with besan, onion, and spices for crispy palak pakoras on rainy days.' },
      { title: 'Soups & Green Smoothies', description: 'Add to lentil soups, vegetable broths, or raw green morning smoothies.' }
    ],
    storageInstructions: 'Refrigerate immediately between 1°C and 4°C in paper-lined sealed containers. Best within 2 to 3 days.',
    hygieneInformation: 'Triple-washed in high-volume bubbling water tanks to remove all sand, grit, and soil particles before precision chopping.',
    faq: [
      { question: 'Is the spinach completely grit-free?', answer: 'Yes! Our multi-stage bubbling wash removes 100% of soil and sand particles.' },
      { question: 'Do I need to blanch it before cooking?', answer: 'No, you can cook it directly in your karahi, handi, or frying pan.' },
      { question: 'Is the thick stem removed?', answer: 'Yes, we remove tough woody stems and only chop tender leaves and soft stems.' }
    ],
    prices: { '250g': 99, '500g': 179 }
  },
  {
    id: 7,
    name: 'Chinese Veg Mix',
    slug: 'chinese-veg-mix',
    urdu: 'چائنیز مکس سبزی',
    cat: 'Mixes',
    icon: '🥗',
    image: 'assets/products/chinese-mix.webp',
    description: 'A colourful mix of cabbage, carrots, capsicum and spring onion for fast stir-fries.',
    shortDescription: 'A vibrant, chef-curated blend of shredded cabbage, carrot julienne, sliced bell peppers, and scallions for instant Asian stir-fries and noodles.',
    nutritionSummary: {
      calories: '35 kcal',
      carbs: '7.8g',
      protein: '1.4g',
      fat: '0.2g',
      fiber: '2.5g',
      keyVitamins: 'Vitamin C, Vitamin A, Vitamin K, Potassium'
    },
    nutrients: [
      { name: 'Carotenoid Complex', amount: 'Mixed', benefit: 'Can support immune cell health and skin luminosity.' },
      { name: 'Vitamin C', amount: '38 mg', benefit: 'Supports collagen production and antioxidant protection.' },
      { name: 'Prebiotic Fiber', amount: '2.5 g', benefit: 'May contribute to gut microbiome diversity.' }
    ],
    healthBenefits: [
      { title: 'Immune System Support', description: 'Multi-vegetable mix supplies diverse vitamins C and A that support white blood cell health.' },
      { title: 'Low-Calorie Fiber Punch', description: 'Fills your plate with volume and micronutrients while maintaining a light caloric footprint.' },
      { title: 'Digestive Balance', description: 'Diverse cruciferous and root fibers support gut motility and bowel regularity.' }
    ],
    cutDescription: 'Uniformly sliced wok-ready stir-fry cuts (cabbage ribbons, carrot julienne, capsicum strips, green onion discs).',
    cookingUses: [
      { title: 'Chow Mein & Fried Rice', description: 'Stir-fry in high heat with soy sauce, garlic, and sesame oil for 3 minutes.' },
      { title: 'Spring Rolls & Momos', description: 'Use as quick seasoning-ready filling for egg rolls, wontons, and dumplings.' },
      { title: 'Hot & Sour Soup', description: 'Drop into boiling chicken or vegetable broth for restaurant-style soup.' }
    ],
    storageInstructions: 'Keep chilled in refrigerator at 2°C to 4°C. Consume within 3 days for maximum wok-fry crunch.',
    hygieneInformation: 'Each vegetable component is washed individually, cut to specification, and blended under cold clean-room conditions.',
    faq: [
      { question: 'How quickly does this cook in a wok?', answer: 'Because of precision slicing, it cooks to perfection in just 3 to 4 minutes on high flame.' },
      { question: 'What vegetables are inside?', answer: 'Shredded white cabbage, carrot julienne, green capsicum slices, and green onion.' },
      { question: 'Can I use this for chicken Manchurian accompaniment?', answer: 'Absolutely! It is the exact vegetable mix used by top Chinese restaurants.' }
    ],
    prices: { '500g': 449, '1kg': 829 }
  },
  {
    id: 8,
    name: 'Seasonal Veg Mix',
    slug: 'seasonal-veg-mix',
    urdu: 'موسمی مکس سبزی',
    cat: 'Mixes',
    icon: '🫛',
    image: 'assets/products/mix-sabzi.webp',
    description: 'A balanced seasonal mix of potatoes, carrots, peas and cauliflower for family meals.',
    shortDescription: 'A wholesome Pakistani household mix of diced potatoes, carrots, shelled green peas, and cauliflower florets cut for traditional mix sabzi curry.',
    nutritionSummary: {
      calories: '62 kcal',
      carbs: '13.5g',
      protein: '2.2g',
      fat: '0.3g',
      fiber: '3.1g',
      keyVitamins: 'Vitamin C, Vitamin A, Vitamin B6, Potassium'
    },
    nutrients: [
      { name: 'Complex Carbohydrates', amount: '13.5 g', benefit: 'Provides steady, sustained energy release for active families.' },
      { name: 'Potassium', amount: '380 mg', benefit: 'Is a source of minerals supporting healthy blood pressure.' },
      { name: 'Dietary Fiber', amount: '3.1 g', benefit: 'May support healthy digestion and gut transit.' }
    ],
    healthBenefits: [
      { title: 'Sustained Energy', description: 'Complex starchy and non-starchy vegetables provide long-lasting metabolic stamina.' },
      { title: 'Family Micronutrient Diversity', description: 'Combines cruciferous, root, and legume nutrition in one balanced meal.' },
      { title: 'Gut Health Care', description: 'Offers a variety of plant fibers that nourish healthy gut flora.' }
    ],
    cutDescription: 'Uniform 1.5cm dice for potatoes and carrots, medium cauliflower florets, and whole shelled peas for balanced pan-cooking times.',
    cookingUses: [
      { title: 'Mix Sabzi Salan', description: 'Cook with onions, tomatoes, ginger, garlic, and traditional spices for classic dinner salan.' },
      { title: 'Vegetable Pulao / Biryani', description: 'Layer with basmati rice, aromatic spices, and mint for flavorful veg pulao.' },
      { title: 'Cutlets & Samosa Filling', description: 'Steam and mash with green chilies and spices for tasty vegetable cutlets.' }
    ],
    storageInstructions: 'Store refrigerated at 2°C to 4°C. Best cooked within 3 to 4 days.',
    hygieneInformation: 'All 4 vegetables are individually cleaned, peeled, diced, and inspected before cold-chamber packaging.',
    faq: [
      { question: 'Do all four vegetables cook at the same rate?', answer: 'Yes! We cut the potatoes smaller and cauliflower larger so everything cooks evenly in one pot.' },
      { question: 'Does this contain any preservatives?', answer: 'No preservatives at all. 100% natural, fresh-cut vegetables.' },
      { question: 'Can I cook this directly in a pressure cooker?', answer: 'Yes, 1 whistle in a pressure cooker produces perfectly cooked mix sabzi.' }
    ],
    prices: { '500g': 299, '1kg': 549 },
    sale: true
  },
  {
    id: 9,
    name: 'Potato Fries Cut',
    slug: 'potato-fries-cut',
    urdu: 'آلو فرائز کٹ',
    cat: 'Pre-cut',
    icon: '🥔',
    image: 'assets/products/potato-fries.webp',
    description: 'Fresh potatoes peeled and cut into consistent strips, ready to fry, bake or air-fry.',
    shortDescription: 'Grade-A potatoes peeled and cut into restaurant-standard fry batons, pre-chilled to reduce excess surface starch for extra crispiness.',
    nutritionSummary: {
      calories: '77 kcal',
      carbs: '17.5g',
      protein: '2.0g',
      fat: '0.1g',
      fiber: '2.2g',
      keyVitamins: 'Potassium, Vitamin B6, Vitamin C, Niacin'
    },
    nutrients: [
      { name: 'Potassium', amount: '425 mg', benefit: 'Can contribute to normal muscle function and nerve transmission.' },
      { name: 'Vitamin B6', amount: '0.3 mg', benefit: 'Supports amino acid metabolism and red blood cell synthesis.' },
      { name: 'Resistant Starch', amount: 'Natural', benefit: 'May support bowel health when cooked and cooled.' }
    ],
    healthBenefits: [
      { title: 'Electrolyte & Mineral Support', description: 'Potassium-rich root vegetable supporting fluid balance and muscle recovery.' },
      { title: 'Natural Energy Fuel', description: 'Easily digestible complex carbohydrates provide clean fuel for physical activity.' },
      { title: 'Versatile Low-Fat Cooking', description: 'Air-fry or oven-bake with minimal oil for a healthy home fry snack.' }
    ],
    cutDescription: 'Uniform 9mm x 9mm French fry batons cut to consistent length for uniform frying.',
    cookingUses: [
      { title: 'Crispy Deep Fry', description: 'Fry in hot oil (175°C) for 4-5 minutes until golden brown and crispy.' },
      { title: 'Air Fryer French Fries', description: 'Toss with 1 tsp oil, salt, and paprika, then air-fry at 200°C for 12-15 minutes.' },
      { title: 'Loaded Cheese Fries', description: 'Bake, top with melted cheddar, jalapeños, and herbs for family movie night.' }
    ],
    storageInstructions: 'Submerge in cold water in a sealed container in refrigerator (2°C-4°C) if saving for later, or cook within 2 days.',
    hygieneInformation: 'Peeled, baton-cut, washed in chilled water to remove excess surface starch, and packed fresh without bleaching chemicals.',
    faq: [
      { question: 'Why are these fries crisper than home-cut potatoes?', answer: 'We remove surface starch during chilled washing, which prevents sogginess when frying.' },
      { question: 'Should I dry them before frying?', answer: 'Yes, pat dry with a clean paper towel before dropping into hot oil for best crispiness.' },
      { question: 'Are these pre-fried or frozen?', answer: 'Neither! These are 100% fresh, raw cut potatoes delivered cold.' }
    ],
    prices: { '500g': 89, '1kg': 149 }
  },
  {
    id: 10,
    name: 'Fresh Mint Leaves',
    slug: 'fresh-mint-leaves',
    urdu: 'پودینے کے پتے',
    cat: 'Leafy',
    icon: '🌱',
    image: 'assets/products/mint-leaves.webp',
    description: 'Washed fresh mint leaves for chutney, raita, drinks, salads and garnishing.',
    shortDescription: 'Aromatic spearmint leaves hand-picked from stems, triple-washed, and packed fresh for emerald chutneys, raitas, mojitos, and lemonade.',
    nutritionSummary: {
      calories: '44 kcal',
      carbs: '8.4g',
      protein: '3.3g',
      fat: '0.7g',
      fiber: '6.8g',
      keyVitamins: 'Vitamin A, Iron, Manganese, Folate'
    },
    nutrients: [
      { name: 'Menthol Essential Oil', amount: 'Aromatic active', benefit: 'May contribute to digestive comfort and nasal airway cooling.' },
      { name: 'Rosmarinic Acid', amount: 'Antioxidant', benefit: 'Can support anti-inflammatory pathways and seasonal comfort.' },
      { name: 'Dietary Iron', amount: '11.8 mg', benefit: 'Provides vital minerals for oxygen transport in blood.' }
    ],
    healthBenefits: [
      { title: 'Digestive Comfort Support', description: 'Menthol oils encourage bile flow and digestive enzyme secretion.' },
      { title: 'Refreshing Soothing Properties', description: 'Naturally cools the palate and supports throat and breath freshness.' },
      { title: 'Antioxidant Protection', description: 'Polyphenols help protect cell membranes from free radical oxidation.' }
    ],
    cutDescription: 'Whole undamaged mint leaves carefully plucked from woody stems.',
    cookingUses: [
      { title: 'Hari Chutney', description: 'Blend with coriander, green chilies, garlic, cumin, and lemon juice for tikka dip.' },
      { title: 'Mint Raita', description: 'Whisk into chilled yogurt with roasted cumin powder and black salt.' },
      { title: 'Limonade & Lemon Mint Soda', description: 'Muddle fresh leaves with ice, lemon, and sparkling water for hot summer days.' }
    ],
    storageInstructions: 'Store in refrigerator at 2°C to 5°C enclosed with a dry paper towel to absorb ambient moisture. Best within 3 days.',
    hygieneInformation: 'Gently triple-washed in chilled water to remove fine soil without bruising fragile mint leaves.',
    faq: [
      { question: 'Are the thick stems removed?', answer: 'Yes, we pluck only the tender green leaves and discard tough woody stalks.' },
      { question: 'Will these turn black in the fridge?', answer: 'Keep them dry and sealed in their container; our moisture-control packaging extends freshness.' },
      { question: 'Can I blend these directly for chutney?', answer: 'Yes, they are pre-washed and ready to drop into your blender.' }
    ],
    prices: { '100g': 89, '200g': 159 }
  },
  {
    id: 11,
    name: 'Green Capsicum',
    slug: 'green-capsicum',
    urdu: 'شملہ مرچ',
    cat: 'Whole',
    icon: '🫑',
    image: 'assets/products/green-capsicum.webp',
    description: 'Crisp whole green capsicums selected for freshness, stuffing, curries and stir-fries.',
    shortDescription: 'Firm, glossy green bell peppers selected for thick walls, juicy crunch, and vivid color, perfect for stuffing, slicing, or dicing.',
    nutritionSummary: {
      calories: '20 kcal',
      carbs: '4.6g',
      protein: '0.9g',
      fat: '0.2g',
      fiber: '1.7g',
      keyVitamins: 'Vitamin C, Vitamin B6, Vitamin K1, Folate'
    },
    nutrients: [
      { name: 'Vitamin C', amount: '80.4 mg', benefit: 'Delivers over 100% daily recommended Vitamin C supporting collagen and immunity.' },
      { name: 'Capsanthin & Lutein', amount: 'Antioxidants', benefit: 'May support eye lens protection and tissue health.' },
      { name: 'Vitamin B6', amount: '0.3 mg', benefit: 'Can contribute to red blood cell maintenance and metabolic health.' }
    ],
    healthBenefits: [
      { title: 'Immune Defense Powerhouse', description: 'Surpasses oranges in Vitamin C content per 100g, reinforcing natural immune barriers.' },
      { title: 'Skin & Tissue Vitality', description: 'Vitamin C is essential for collagen synthesis, supporting firm, healthy skin.' },
      { title: 'Low-Calorie Crunch', description: 'Provides high water and fiber content for crisp satisfaction with minimal calories.' }
    ],
    cutDescription: 'Whole hand-selected 3-lobe or 4-lobe capsicums with green stems intact.',
    cookingUses: [
      { title: 'Stuffed Capsicum (Bharwan Shimla Mirch)', description: 'Hollow out and stuff with spiced potatoes or minced meat, then pan-roast.' },
      { title: 'Karahi & Jalfrezi', description: 'Dice or julienne for chicken jalfrezi, karahi garnishing, or fajita platters.' },
      { title: 'Pizza & Pasta Toppings', description: 'Slice into rings for homemade pizzas, lasagna, or pasta bakes.' }
    ],
    storageInstructions: 'Refrigerate in crisper drawer at 3°C to 6°C. Remains firm for up to 7 days.',
    hygieneInformation: 'Sanitized water washed and surface dried. Stem and skin inspected for blemishes.',
    faq: [
      { question: 'Are these capsicums spicy?', answer: 'No, green capsicums (bell peppers) are sweet and savory with zero chili heat.' },
      { question: 'How should I store whole capsicums?', answer: 'Keep in the vegetable crisper drawer of your fridge in a breathable bag.' },
      { question: 'Are they suitable for raw salads?', answer: 'Yes, slice thin for a juicy, crunchy addition to fresh garden salads.' }
    ],
    prices: { '250g': 109, '500g': 199 }
  },
  {
    id: 12,
    name: 'Fresh Tomatoes',
    slug: 'fresh-tomatoes',
    urdu: 'ثابت ٹماٹر',
    cat: 'Whole',
    icon: '🍅',
    image: 'assets/products/fresh-tomatoes.webp',
    description: 'Fresh ripe whole tomatoes selected for curries, sauces, salads and everyday cooking.',
    shortDescription: 'Plump, farm-ripe red tomatoes sorted for firm skin, vibrant juice, and rich flavor, ideal for gravy bases, salads, and sauces.',
    nutritionSummary: {
      calories: '18 kcal',
      carbs: '3.9g',
      protein: '0.9g',
      fat: '0.2g',
      fiber: '1.2g',
      keyVitamins: 'Lycopene, Vitamin C, Potassium, Vitamin K'
    },
    nutrients: [
      { name: 'Lycopene', amount: '2573 mcg', benefit: 'Potent carotenoid antioxidant that may support heart and prostate health.' },
      { name: 'Potassium', amount: '237 mg', benefit: 'Is a source of minerals aiding blood pressure and fluid balance.' },
      { name: 'Vitamin C', amount: '13.7 mg', benefit: 'Supports immune defenses and iron absorption from plant foods.' }
    ],
    healthBenefits: [
      { title: 'Cardiovascular Support', description: 'Lycopene and potassium help maintain blood vessel flexibility and healthy blood pressure.' },
      { title: 'Skin & UV Defense', description: 'Dietary lycopene can support skin cell resilience against environmental factors.' },
      { title: 'Nutrient Absorption Booster', description: 'Natural tomato acids enhance non-heme iron absorption from lentils and spinach.' }
    ],
    cutDescription: 'Whole, firm vine-ripened tomatoes sorted for cooking and salad preparation.',
    cookingUses: [
      { title: 'Karahi & Curry Gravies', description: 'Chop or puree for chicken karahi, mutton bhuna, or lentil salan bases.' },
      { title: 'Fresh Salads & Kachumber', description: 'Dice with onions and cucumber for refreshing daily salad side dish.' },
      { title: 'Tomato Pasta Sauce & Chutneys', description: 'Simmer with garlic, basil, or mustard seeds for homemade sauces and chutneys.' }
    ],
    storageInstructions: 'Store at room temperature away from direct sunlight for best flavor development, or refrigerate if ripe.',
    hygieneInformation: 'Washed in purified water and quality sorted to remove split or bruised fruit.',
    faq: [
      { question: 'Should tomatoes be kept in the fridge?', answer: 'For best flavor, store at room temperature. Refrigerate only once fully ripe to slow down softening.' },
      { question: 'Are these tomatoes good for chicken karahi?', answer: 'Yes! Their rich red juice melts down into an authentic thick karahi gravy.' },
      { question: 'Are they free of artificial ripening agents?', answer: '100% naturally vine-ripened farm produce.' }
    ],
    prices: { '500g': 199, '1kg': 369 }
  },
  {
    id: 13,
    name: 'Chopped Coriander',
    slug: 'chopped-coriander',
    urdu: 'کٹا ہوا ہرا دھنیا',
    cat: 'Leafy',
    icon: '🌿',
    image: 'assets/products/chopped-coriander.webp',
    description: 'Fresh coriander washed and chopped for curries, chutneys, salads and garnishing.',
    shortDescription: 'Fragrant fresh cilantro (dhania) washed free of root soil and finely chopped, ready to sprinkle over curries, biryani, or blend into chutney.',
    nutritionSummary: {
      calories: '23 kcal',
      carbs: '3.7g',
      protein: '2.1g',
      fat: '0.5g',
      fiber: '2.8g',
      keyVitamins: 'Vitamin K, Vitamin A, Vitamin C, Potassium'
    },
    nutrients: [
      { name: 'Quercetin & Carotenoids', amount: 'Antioxidants', benefit: 'Can help neutralize free radicals and support cellular wellness.' },
      { name: 'Vitamin K1', amount: '310 mcg', benefit: 'Essential for healthy blood coagulation and bone tissue maintenance.' },
      { name: 'Potassium', amount: '521 mg', benefit: 'Supports nerve function and fluid regulation.' }
    ],
    healthBenefits: [
      { title: 'Heavy Metal Chelation Support', description: 'Natural phytochemicals in cilantro may assist the body in binding and clearing heavy metals.' },
      { title: 'Digestive Ease', description: 'Traditional herb used to reduce bloating and support smooth digestion after heavy meals.' },
      { title: 'Flavor Without Sodium', description: 'Adds rich herbal aroma and visual vibrancy without adding sodium or calories.' }
    ],
    cutDescription: 'Finely chopped coriander leaves (approx. 5mm) with roots and tough bottom stems removed.',
    cookingUses: [
      { title: 'Curry & Dal Garnishing', description: 'Sprinkle generously over hot karahi, haleem, biryani, or tarka dal right before serving.' },
      { title: 'Green Chutney', description: 'Blend with mint, lemon, green chili, and salt for essential samosa and kabab dip.' },
      { title: 'Kabab & Cutlet Mix', description: 'Knead directly into ground beef, mutton, or chicken for Seekh and Chapli kababs.' }
    ],
    storageInstructions: 'Refrigerate at 2°C to 4°C in a dry container lined with paper towel. Use within 2 to 3 days.',
    hygieneInformation: 'Roots cut off, washed through 3 stages of sanitized water to eliminate dirt, and gently spin-dried.',
    faq: [
      { question: 'Is there any mud or soil left in the leaves?', answer: 'No, our multi-stage washing removes all soil, sand, and root grit completely.' },
      { question: 'Are the thick stems removed?', answer: 'Yes, we remove root ends and tough stems, packing tender leafy tops.' },
      { question: 'Can I add this straight to my cooked dish?', answer: 'Yes, it is pre-washed and ready to garnish instantly.' }
    ],
    prices: { '100g': 129, '200g': 229 },
    sale: true
  },
  {
    id: 14,
    name: 'Peeled Ginger',
    slug: 'peeled-ginger',
    urdu: 'چھلا ہوا ادرک',
    cat: 'Essentials',
    icon: '🫚',
    image: 'assets/products/peeled-ginger.webp',
    description: 'Fresh ginger carefully peeled and portioned to save time in everyday cooking.',
    shortDescription: 'Clean, spicy ginger rhizomes hand-peeled and trimmed of skin knots, ready for slicing, grating, or blending into cooking paste.',
    nutritionSummary: {
      calories: '80 kcal',
      carbs: '17.8g',
      protein: '1.8g',
      fat: '0.8g',
      fiber: '2.0g',
      keyVitamins: 'Gingerol, Potassium, Vitamin B6, Magnesium'
    },
    nutrients: [
      { name: 'Gingerol & Shogaol', amount: 'Active bioactives', benefit: 'Potent natural bioactives supporting joint comfort and anti-inflammatory balance.' },
      { name: 'Magnesium', amount: '43 mg', benefit: 'Is a source of minerals involved in muscle relaxation and nerve signals.' },
      { name: 'Potassium', amount: '415 mg', benefit: 'Supports circulatory health and fluid balance.' }
    ],
    healthBenefits: [
      { title: 'Nausea & Stomach Comfort', description: 'Gingerol compounds soothe stomach linings and reduce feelings of nausea or motion discomfort.' },
      { title: 'Joint & Inflammatory Ease', description: 'Bioactive gingerols may help modulate inflammatory response in muscles and joints.' },
      { title: 'Digestive Fire Booster', description: 'Stimulates digestive enzymes and accelerates stomach emptying after heavy food.' }
    ],
    cutDescription: 'Whole peeled ginger knobs with fibrous skin skin removed and crevices cleaned.',
    cookingUses: [
      { title: 'Adrak Julienne for Nihari & Karahi', description: 'Slice thinly into julienne strips to garnish hot Nihari, Haleem, or Chicken Karahi.' },
      { title: 'Homemade Ginger Paste', description: 'Blend with peeled garlic cloves and a splash of oil for fresh cooking paste.' },
      { title: 'Adrak Chai / Herbal Tea', description: 'Crush a 1-inch piece and boil in water with tea leaves and cardamom for soothing ginger tea.' }
    ],
    storageInstructions: 'Keep in airtight container in refrigerator at 2°C-4°C for up to 10 days, or freeze for up to 3 months.',
    hygieneInformation: 'Peeled under strict hygiene standards, rinsed in food-safe antimicrobial solution, and vacuum/air-tight packed.',
    faq: [
      { question: 'Is the skin 100% removed?', answer: 'Yes, skin and fibrous knots are hand-trimmed to leave smooth, usable ginger root.' },
      { question: 'Does peeled ginger dry out easily?', answer: 'Store it sealed in its container in the fridge to preserve juiciness and spicy kick.' },
      { question: 'Can I grate this directly?', answer: 'Yes! It grates effortlessly without skin getting stuck in your grater.' }
    ],
    prices: { '200g': 199, '400g': 369 },
    sale: true
  },
  {
    id: 15,
    name: 'Shredded Cabbage',
    slug: 'shredded-cabbage',
    urdu: 'کٹی ہوئی بند گوبھی',
    cat: 'Pre-cut',
    icon: '🥬',
    image: 'assets/products/shredded-cabbage.webp',
    description: 'Fresh cabbage finely shredded for stir-fries, coleslaw, rolls and noodles.',
    shortDescription: 'Thinly sliced, uniform ribbons of fresh white cabbage, thoroughly washed and crisp-drained for coleslaws, rolls, and Asian wok dishes.',
    nutritionSummary: {
      calories: '25 kcal',
      carbs: '5.8g',
      protein: '1.3g',
      fat: '0.1g',
      fiber: '2.5g',
      keyVitamins: 'Vitamin K, Vitamin C, Folate, Glutamine'
    },
    nutrients: [
      { name: 'Glucosinolates', amount: 'Phytochemicals', benefit: 'Can support liver detoxification pathways and cell health.' },
      { name: 'Vitamin K1', amount: '76 mcg', benefit: 'Provides over 80% daily value for bone health and blood clotting.' },
      { name: 'Glutamine', amount: 'Amino Acid', benefit: 'May support intestinal lining integrity and digestive comfort.' }
    ],
    healthBenefits: [
      { title: 'Gastrointestinal Support', description: 'Contains amino acid glutamine which is known to support healthy stomach mucosal lining.' },
      { title: 'Detoxification Assistance', description: 'Cruciferous compounds support Phase II liver detox enzymes.' },
      { title: 'Weight Management', description: 'Fills salads and rolls with high volume crunch for very low caloric intake.' }
    ],
    cutDescription: 'Fine shredded cabbage ribbons (approx. 2mm width) cut from core-removed cabbage heads.',
    cookingUses: [
      { title: 'Mayo Coleslaw', description: 'Mix with mayonnaise, black pepper, sugar, and lemon juice for classic burger slaw.' },
      { title: 'Vegetable Spring Rolls', description: 'Sauté with soy sauce and garlic to fill crispy fried spring roll wrappers.' },
      { title: 'Chow Mein & Noodles', description: 'Flash fry in hot wok for crunchy street-style chicken chow mein.' }
    ],
    storageInstructions: 'Refrigerate at 2°C to 4°C in sealed bag or box. Stays crispy for 4 to 5 days.',
    hygieneInformation: 'Cabbage heads are cored, outer leaves discarded, shredded mechanically, and sanitized in cold purified water tanks.',
    faq: [
      { question: 'Is the tough cabbage core removed?', answer: 'Yes, we remove 100% of the tough inner core before shredding tender leaves.' },
      { question: 'Will it stay crisp in coleslaw?', answer: 'Yes! Our cold-sanitizing process preserves maximum cellular turgor for long-lasting crunch.' },
      { question: 'Is it ready for raw consumption?', answer: 'Yes, thoroughly washed and ready to serve raw in salads and burgers.' }
    ],
    prices: { '250g': 99, '500g': 179 }
  },
  {
    id: 16,
    name: 'Beetroot Cubes',
    slug: 'beetroot-cubes',
    urdu: 'چقندر کیوبز',
    cat: 'Pre-cut',
    icon: '🟣',
    image: 'assets/products/beetroot-cubes.webp',
    description: 'Fresh beetroot peeled and cut into uniform cubes for salads, juices and cooking.',
    shortDescription: 'Deep magenta fresh beetroot peeled and diced into 1cm cubes, ideal for roasting, boiling, Russian salads, or juicing.',
    nutritionSummary: {
      calories: '43 kcal',
      carbs: '9.6g',
      protein: '1.6g',
      fat: '0.2g',
      fiber: '2.8g',
      keyVitamins: 'Inorganic Nitrates, Folate, Manganese, Potassium'
    },
    nutrients: [
      { name: 'Betalain Pigments', amount: 'Antioxidant', benefit: 'Gives rich red color and supports anti-inflammatory cell health.' },
      { name: 'Dietary Nitrates', amount: '250 mg', benefit: 'Converts to nitric oxide, supporting blood vessel dilation and stamina.' },
      { name: 'Folate (Vitamin B9)', amount: '109 mcg', benefit: 'Supports DNA synthesis and tissue cell regeneration.' }
    ],
    healthBenefits: [
      { title: 'Circulation & Blood Pressure', description: 'Dietary nitrates convert to nitric oxide, helping dilate arteries and support healthy blood pressure.' },
      { title: 'Stamina & Athletic Energy', description: 'May enhance oxygen efficiency during exercise and daily physical tasks.' },
      { title: 'Liver Detox Support', description: 'Betalains assist liver cells in processing and eliminating metabolic wastes.' }
    ],
    cutDescription: 'Neat 10mm x 10mm diced cubes peeled cleanly without tough outer skin.',
    cookingUses: [
      { title: 'Russian Salad & Power Salads', description: 'Boil or steam cubes and toss with mayo, peas, and apples for classic cold salad.' },
      { title: 'Oven Roasted Beetroot', description: 'Toss with olive oil, thyme, and sea salt, then roast until caramelized.' },
      { title: 'Fresh Juice & Smoothies', description: 'Blend with carrot, apple, and ginger for a vibrant blood-purifying detox tonic.' }
    ],
    storageInstructions: 'Store refrigerated at 2°C to 4°C. Keeps fresh for up to 5 days.',
    hygieneInformation: 'Peeled, diced, and rinsed in cold sanitized water. Air-dried before sealing in leak-proof packaging.',
    faq: [
      { question: 'Are these raw or cooked?', answer: 'These are raw, fresh-cut beetroot cubes ready for raw juices, boiling, or baking.' },
      { question: 'Do they stain hands during prep?', answer: 'Since they are pre-peeled and pre-cut, your hands stay 100% clean!' },
      { question: 'How long should I boil them for salad?', answer: 'Boil in salted water for 12-15 minutes until fork tender.' }
    ],
    prices: { '250g': 99, '500g': 179 },
    sale: true
  },
  {
    id: 18,
    name: 'Fresh Peas',
    slug: 'fresh-peas',
    urdu: 'تازہ مٹر',
    cat: 'Essentials',
    icon: '🫛',
    image: 'assets/products/fresh-peas.webp',
    description: 'Bright green peas shelled and cleaned, ready for pulao, curries and mixed vegetables.',
    shortDescription: 'Sweet, tender green peas freshly pod-shelled and sorted, saving you the long effort of shelling peas for pulao, keema matar, or aloo matar.',
    nutritionSummary: {
      calories: '81 kcal',
      carbs: '14.5g',
      protein: '5.4g',
      fat: '0.4g',
      fiber: '5.7g',
      keyVitamins: 'Vitamin K, Vitamin C, Thiamine (B1), Folate'
    },
    nutrients: [
      { name: 'Plant Protein', amount: '5.4 g', benefit: 'Supports muscle tissue maintenance and vegetarian protein intake.' },
      { name: 'Dietary Fiber', amount: '5.7 g', benefit: 'High fiber content aids bowel regularity and slow glucose release.' },
      { name: 'Lutein', amount: '2477 mcg', benefit: 'May support eye lens protection and macular health.' }
    ],
    healthBenefits: [
      { title: 'Plant Protein & Satiety', description: 'One of the richest vegetable sources of protein and fiber, keeping you full longer.' },
      { title: 'Glycemic Regulation', description: 'Low glycemic index and high fiber help prevent rapid post-meal blood sugar spikes.' },
      { title: 'Vision & Macular Care', description: 'Concentrated carotenoids lutein and zeaxanthin support eye strain defense.' }
    ],
    cutDescription: 'Whole, intact pod-shelled green peas sorted for sweetness and bright green color.',
    cookingUses: [
      { title: 'Matar Pulao & Biryani', description: 'Add directly to rice pan with cumin and spices for fragrant pea pulao.' },
      { title: 'Keema Matar & Aloo Matar', description: 'Simmer with ground meat or potatoes in tomato-onion gravy.' },
      { title: 'Matar Paneer', description: 'Combine with fried paneer cubes in mild rich cashew-tomato gravy.' }
    ],
    storageInstructions: 'Refrigerate at 2°C to 4°C for up to 5 days, or freeze in a zip pouch for up to 6 months.',
    hygieneInformation: 'Shelled mechanically from farm-fresh pods, floatation washed in chilled sanitized water, and blanched-free.',
    faq: [
      { question: 'Are these peas sweet or starchy?', answer: 'We harvest young pods to ensure tender, naturally sweet green peas.' },
      { question: 'Do I need to boil them before adding to rice?', answer: 'No, they are tender enough to cook directly along with your rice.' },
      { question: 'Can I freeze the remaining peas?', answer: 'Yes! Place unused peas in an airtight bag and store in freezer.' }
    ],
    prices: { '200g': 229, '500g': 499 },
    sale: true
  },
  {
    id: 19,
    name: 'Sponge Gourd Slice Cut',
    slug: 'sponge-gourd-slice-cut',
    urdu: 'کٹا ہوا توری',
    cat: 'Pre-cut',
    icon: '🥒',
    image: 'assets/products/sponge-gourd-slices.webp',
    description: 'Fresh sponge gourd washed and cut into even round slices for quick home cooking.',
    shortDescription: 'Tender green sponge gourd (turai) peeled and cut into round slices, ready to cook into a light, hydrating, easy-to-digest daily salan.',
    nutritionSummary: {
      calories: '20 kcal',
      carbs: '4.3g',
      protein: '1.2g',
      fat: '0.2g',
      fiber: '1.1g',
      keyVitamins: 'Vitamin C, Vitamin A, Iron, Potassium'
    },
    nutrients: [
      { name: 'Hydration Content', amount: '94%', benefit: 'Provides natural intracellular fluid for hydration and stomach cooling.' },
      { name: 'Vitamin C', amount: '12 mg', benefit: 'Supports skin barrier repair and metabolic wellness.' },
      { name: 'Dietary Minerals', amount: 'Potassium & Iron', benefit: 'Is a source of minerals supporting muscle comfort and red blood cell care.' }
    ],
    healthBenefits: [
      { title: 'Stomach Cooling & Light Digestion', description: 'Exceptionally soft and gentle on the stomach, making it ideal for recovery diets.' },
      { title: 'Natural Body Hydration', description: 'High natural water percentage helps maintain bodily fluid balance in hot climate.' },
      { title: 'Low-Calorie Weight Care', description: 'Provides volume and warmth in meals with minimal caloric impact.' }
    ],
    cutDescription: 'Peeled and sliced into 10mm uniform rounds for quick pan reduction.',
    cookingUses: [
      { title: 'Turai ki Sabzi / Salan', description: 'Cook with onions, tomatoes, cumin seeds, and turmeric until tender and reduced.' },
      { title: 'Turai Chana Dal', description: 'Combine with pre-soaked yellow split peas for a nutritious protein-rich curry.' }
    ],
    storageInstructions: 'Refrigerate at 2°C to 4°C in sealed original packaging. Best cooked within 2 to 3 days.',
    hygieneInformation: 'Peeled of fibrous ridges, washed in sanitized water, and sliced in climate-controlled kitchen.',
    faq: [
      { question: 'Are the sharp outer ridges removed?', answer: 'Yes! We peel all dark green fibrous ridges leaving only tender inner flesh.' },
      { question: 'Does turai reduce in volume when cooked?', answer: 'Yes, because of its high water content, it reduces down into a soft flavorful gravy.' },
      { question: 'Is it bitter?', answer: 'No, we sample batch produce to ensure only sweet, non-bitter turai is processed.' }
    ],
    prices: { '500g': 299, '1kg': 549 },
    sale: true
  },
  {
    id: 20,
    name: 'Pumpkin Cubes',
    slug: 'pumpkin-cubes',
    urdu: 'کدو کیوبز',
    cat: 'Pre-cut',
    icon: '🎃',
    image: 'assets/products/pumpkin-cubes.webp',
    description: 'Fresh pumpkin peeled and cut into uniform cubes, ready for savoury or sweet dishes.',
    shortDescription: 'Golden-orange pumpkin peeled, deseeded, and diced into sturdy 2cm cubes for sweet pumpkin halwa, khatta meetha kaddu, or roasted soups.',
    nutritionSummary: {
      calories: '26 kcal',
      carbs: '6.5g',
      protein: '1.0g',
      fat: '0.1g',
      fiber: '0.5g',
      keyVitamins: 'Vitamin A (Beta-Carotene), Vitamin C, Potassium, Copper'
    },
    nutrients: [
      { name: 'Beta & Alpha-Carotene', amount: '7384 mcg', benefit: 'Converts efficiently into active Vitamin A for skin and mucosal immunity.' },
      { name: 'Potassium', amount: '340 mg', benefit: 'May help balance sodium levels and support vascular health.' },
      { name: 'Vitamin C', amount: '9.0 mg', benefit: 'Supports white blood cell function and systemic antioxidant defenses.' }
    ],
    healthBenefits: [
      { title: 'Immune Defense & Vision', description: 'Abundant provitamin A carotenoids support mucosal barriers and nighttime vision.' },
      { title: 'Skin Radiance', description: 'Antioxidant vitamins C and A help combat skin aging caused by sun exposure.' },
      { title: 'Heart & Blood Pressure Balance', description: 'Potassium and fiber support healthy arterial pressure and circulation.' }
    ],
    cutDescription: 'Hand-peeled and diced 20mm x 20mm sturdy cubes free from seeds and fibrous pulp.',
    cookingUses: [
      { title: 'Khatta Meetha Kaddu', description: 'Cook with fenugreek seeds, amchur, tamarind, and jaggery for sweet and tangy curry.' },
      { title: 'Roasted Pumpkin Soup', description: 'Roast with garlic and onions, then puree with vegetable stock and cream.' },
      { title: 'Kaddu ka Halwa', description: 'Grate or mash cooked cubes with milk, cardamom, ghee, and nuts for rich dessert.' }
    ],
    storageInstructions: 'Keep refrigerated in airtight box at 2°C to 4°C. Best consumed within 4 days.',
    hygieneInformation: 'Hard outer skin rind carved away, seed pocket removed, washed in sanitized water, and cubical sliced.',
    faq: [
      { question: 'Is the tough outer skin peeled off completely?', answer: 'Yes! All hard skin rind and stringy seed pulp are removed.' },
      { question: 'Can I use this for sweet halwa?', answer: 'Yes! It is ideal for both savory curries and sweet kaddu ka halwa.' },
      { question: 'Does pumpkin cook quickly?', answer: 'Yes, these 2cm cubes soften in about 10-12 minutes of simmering or steaming.' }
    ],
    prices: { '500g': 199, '1kg': 369 },
    sale: true
  },
  {
    id: 21,
    name: 'Brinjal Cube Cut',
    slug: 'brinjal-cube-cut',
    urdu: 'بینگن کیوب کٹ',
    cat: 'Pre-cut',
    icon: '🍆',
    image: 'assets/products/brinjal-three-cuts.webp',
    description: 'Fresh purple brinjal washed and cut into neat cubes for curry and mixed vegetables.',
    shortDescription: 'Glossy purple eggplants washed and diced into 1.5cm uniform cubes, treated to prevent browning, perfect for baingan aloo and vegetable curry.',
    nutritionSummary: {
      calories: '25 kcal',
      carbs: '5.9g',
      protein: '1.0g',
      fat: '0.2g',
      fiber: '3.0g',
      keyVitamins: 'Nasunin, Chlorogenic Acid, Manganese, Potassium'
    },
    nutrients: [
      { name: 'Nasunin (Anthocyanin)', amount: 'Potent skin pigment', benefit: 'Can cross cell membranes to protect brain lipid membranes from oxidation.' },
      { name: 'Chlorogenic Acid', amount: 'Antioxidant', benefit: 'May support healthy glucose metabolism and immune defenses.' },
      { name: 'Soluble Fiber', amount: '3.0 g', benefit: 'Supports cholesterol binding and digestive transit.' }
    ],
    healthBenefits: [
      { title: 'Brain Membrane Protection', description: 'Nasunin pigment in eggplant skin is a powerful antioxidant protecting brain cell fats.' },
      { title: 'Metabolic & Heart Wellness', description: 'Chlorogenic acid and fiber contribute to healthy cholesterol and glucose levels.' },
      { title: 'Low Glycemic Satiety', description: 'Adds satisfying texture and volume to dishes with minimal impact on blood sugar.' }
    ],
    cutDescription: 'Uniform 15mm diced cubes cut fresh to order to minimize oxidation.',
    cookingUses: [
      { title: 'Aloo Baingan Masala', description: 'Saute with diced potatoes, cumin, coriander, and tomato masala.' },
      { title: 'Hyderabadi Bagara Baingan Base', description: 'Pan fry cubes before simmering in peanut-sesame coconut gravy.' },
      { title: 'Ratatouille & Pasta', description: 'Roast with zucchini, tomatoes, and olive oil for Mediterranean dishes.' }
    ],
    storageInstructions: 'Refrigerate at 2°C to 4°C. Cook within 2 days for best color and texture.',
    hygieneInformation: 'Washed in anti-browning citric water bath, diced under hygienic room conditions, and sealed dry.',
    faq: [
      { question: 'Why don’t these brinjal cubes turn black quickly?', answer: 'We rinse them in a natural mild food-grade citric acid wash that prevents rapid air oxidation.' },
      { question: 'Should I soak them in salt water before frying?', answer: 'No need! They are pre-cleaned and treated, ready to cook directly.' },
      { question: 'Is the skin left on?', answer: 'Yes, the skin contains nasunin antioxidants and helps cubes retain shape during cooking.' }
    ],
    prices: { '250g': 119, '500g': 219 },
    sale: true
  },
  {
    id: 22,
    name: 'Brinjal Slices',
    slug: 'brinjal-slices',
    urdu: 'بینگن سلائس',
    cat: 'Pre-cut',
    icon: '🍆',
    image: 'assets/products/brinjal-three-cuts.webp',
    description: 'Fresh brinjal cut into even round slices, ready for frying, baking or curry.',
    shortDescription: 'Uniform round eggplant slices cut at 8mm thickness, ideal for crispy baingan pakoras, fried brinjal slices, or layered casseroles.',
    nutritionSummary: {
      calories: '25 kcal',
      carbs: '5.9g',
      protein: '1.0g',
      fat: '0.2g',
      fiber: '3.0g',
      keyVitamins: 'Nasunin, Potassium, Vitamin K, Folate'
    },
    nutrients: [
      { name: 'Nasunin Antioxidant', amount: 'Bioactive', benefit: 'May protect cellular membranes against oxidative stress.' },
      { name: 'Potassium', amount: '229 mg', benefit: 'Supports normal nerve impulse transmission and muscle comfort.' },
      { name: 'Dietary Fiber', amount: '3.0 g', benefit: 'Promotes healthy digestive motility and satiety.' }
    ],
    healthBenefits: [
      { title: 'Antioxidant Defense', description: 'Rich in polyphenols and anthocyanins that aid body cells against oxidative degradation.' },
      { title: 'Heart & Circulatory Support', description: 'Potassium and fiber work in tandem to support vascular flexibility.' },
      { title: 'SATIETY FOR WEIGHT CARE', description: 'High fiber structure absorbs spices while keeping overall meal calories low.' }
    ],
    cutDescription: 'Clean 8mm circular disc cuts across the eggplant width.',
    cookingUses: [
      { title: 'Baingan Pakora', description: 'Dip in spiced besan batter and deep-fry for tea-time crunchy fritters.' },
      { title: 'Tawa Fry Baingan', description: 'Marinate with red chili, haldi, salt, and lemon juice, then fry on hot griddle.' },
      { title: 'Moussaka & Eggplant Parmesan', description: 'Layer with tomato sauce, minced meat, or cheese and bake.' }
    ],
    storageInstructions: 'Refrigerate at 2°C to 4°C. Consume within 2 days.',
    hygieneInformation: 'Washed in sanitized water, cut precision round, treated against air oxidation, and sealed.',
    faq: [
      { question: 'What is the thickness of each slice?', answer: 'Each slice is cut to an even 8mm thickness for perfect crisp frying.' },
      { question: 'Do I need to peel off the skin?', answer: 'No, the skin holds the slice together during frying and packs rich antioxidants.' },
      { question: 'Are these ready for pakora dipping?', answer: 'Yes! Completely washed, cut, and ready to dip into besan batter.' }
    ],
    prices: { '250g': 119, '500g': 219 }
  },
  {
    id: 23,
    name: 'Whole Brinjal',
    slug: 'whole-brinjal',
    urdu: 'ثابت بینگن',
    cat: 'Whole',
    icon: '🍆',
    image: 'assets/products/brinjal-three-cuts.webp',
    description: 'Fresh whole purple brinjals selected and packed for everyday home cooking.',
    shortDescription: 'Glossy dark purple whole eggplants with fresh green calyx stems, ideal for flame-roasting for Baingan Bharta or stuffing.',
    nutritionSummary: {
      calories: '25 kcal',
      carbs: '5.9g',
      protein: '1.0g',
      fat: '0.2g',
      fiber: '3.0g',
      keyVitamins: 'Nasunin, Chlorogenic Acid, Manganese, Potassium'
    },
    nutrients: [
      { name: 'Nasunin', amount: 'Antioxidant', benefit: 'Can contribute to brain membrane protection and cellular defense.' },
      { name: 'Chlorogenic Acid', amount: 'Phytochemical', benefit: 'Supports healthy metabolic function and glucose regulation.' },
      { name: 'Manganese', amount: '0.2 mg', benefit: 'Essential trace element for antioxidant enzyme activation.' }
    ],
    healthBenefits: [
      { title: 'Cellular Health Support', description: 'Dark purple peel is packed with potent anthocyanins that protect cells from oxidation.' },
      { title: 'Low-Glycemic Energy', description: 'Negligible glycemic impact makes it superior for low-carb and diabetic diets.' },
      { title: 'Digestive Wellness', description: 'Plentiful dietary fiber supports gut motility and gut microbiome diversity.' }
    ],
    cutDescription: 'Whole un-cut brinjals selected for smooth unblemished skin and firm stem.',
    cookingUses: [
      { title: 'Smoky Baingan Bharta', description: 'Roast whole over direct gas flame until skin chars, peel and mash with spices and onions.' },
      { title: 'Bharwan Baingan', description: 'Slit into quarters keeping stem intact, stuff with peanut-masala powder, and cook in pan.' },
      { title: 'Khatte Baingan', description: 'Cut into quarters and cook in tangy tamarind gravy.' }
    ],
    storageInstructions: 'Store in refrigerator crisper at 4°C to 7°C. Keeps well for up to 5 days.',
    hygieneInformation: 'Washed in sanitized water and inspected for stem firmness and insect holes.',
    faq: [
      { question: 'Are these eggplants seedless or soft-seeded?', answer: 'We select tender young eggplants with minimal soft seeds to prevent bitterness.' },
      { question: 'Can I roast these directly on gas flame?', answer: 'Yes! They are washed and stem-intact, ideal for direct flame roasting.' },
      { question: 'What size are the whole brinjals?', answer: 'Medium-sized (approx 150-200g each) for easy roasting and stuffing.' }
    ],
    prices: { '500g': 199, '1kg': 369 }
  },
  {
    id: 24,
    name: 'Chopped Broccoli Stalks',
    slug: 'chopped-broccoli-stalks',
    urdu: 'کٹے ہوئے بروکلی ڈنٹھل',
    cat: 'Pre-cut',
    icon: '🥦',
    image: 'assets/products/cauliflower.webp',
    description: 'Fresh broccoli stalks washed and chopped for stir-fries and soups.',
    shortDescription: 'Nutrient-packed broccoli stems peeled of tough skin and diced into sweet crunchy cubes, fantastic for stir-fries, broths, and vegetable stocks.',
    nutritionSummary: {
      calories: '28 kcal',
      carbs: '5.2g',
      protein: '2.4g',
      fat: '0.3g',
      fiber: '3.3g',
      keyVitamins: 'Sulforaphane, Vitamin C, Calcium, Prebiotic Fiber'
    },
    nutrients: [
      { name: 'Sulforaphane', amount: 'High concentration', benefit: 'Supports cellular defense mechanisms and liver enzyme activation.' },
      { name: 'Prebiotic Fiber', amount: '3.3 g', benefit: 'Feeds beneficial gut bacteria in the colon.' },
      { name: 'Calcium', amount: '47 mg', benefit: 'Is a source of essential minerals supporting bone strength.' }
    ],
    healthBenefits: [
      { title: 'Gut Prebiotic Powerhouse', description: 'Broccoli stalks contain even higher soluble fiber concentrations than florets, feeding gut flora.' },
      { title: 'Cellular Detoxification', description: 'Rich in glucosinolates that convert to active sulforaphane during digestion.' },
      { title: 'Sustainable Zero-Waste Cooking', description: 'Unlocks the most nutrient-dense part of broccoli often thrown away.' }
    ],
    cutDescription: 'Outer woody skin carved away, inner sweet core cut into 1cm diced cubes.',
    cookingUses: [
      { title: 'Asian Stir-Fry', description: 'Stir-fry with garlic, soy sauce, and sesame oil for crisp water-chestnut-like crunch.' },
      { title: 'Broccoli Soup Base', description: 'Simmer with potatoes and onions, then blend into velvet green cream soup.' },
      { title: 'Vegetable Broth Stock', description: 'Boil with carrots and herbs for mineral-rich homemade vegetable stock.' }
    ],
    storageInstructions: 'Refrigerate at 2°C to 4°C in sealed box. Best within 4 days.',
    hygieneInformation: 'Outer fibrous bark peeled away, inner tender core diced and washed in sanitized chilled water.',
    faq: [
      { question: 'Do broccoli stalks taste good?', answer: 'Yes! Once peeled, the inner stem is sweet, juicy, and crunchy—tasting like water chestnuts.' },
      { question: 'Is the tough fibrous outer skin removed?', answer: 'Yes, 100% of the tough woody skin is peeled off before dicing.' },
      { question: 'How long do they take to cook?', answer: 'They cook in 4-6 minutes in stir-fries or boiling soup.' }
    ],
    prices: { '250g': 179, '500g': 329 }
  },
  {
    id: 25,
    name: 'Brown Fried Onions',
    slug: 'brown-fried-onions',
    urdu: 'براؤن فرائی پیاز',
    cat: 'Ready-to-cook',
    icon: '🧅',
    image: 'assets/products/chopped-onion.webp',
    description: 'Golden-brown fried onions for biryani, curries and garnishing.',
    shortDescription: 'Crispy golden-brown fried onions (birista) made from thinly sliced onions fried to crunchy perfection in premium cooking oil.',
    nutritionSummary: {
      calories: '480 kcal',
      carbs: '45.0g',
      protein: '5.0g',
      fat: '32.0g',
      fiber: '4.5g',
      keyVitamins: 'Quercetin, Flavonoids, Concentrated Minerals'
    },
    nutrients: [
      { name: 'Quercetin Flavonoids', amount: 'Concentrated', benefit: 'Offers potent antioxidant properties in culinary spice form.' },
      { name: 'Dietary Fiber', amount: '4.5 g', benefit: 'May support digestive transit.' },
      { name: 'Energy Density', amount: '480 kcal', benefit: 'Provides rapid rich calories for rich authentic sauces.' }
    ],
    healthBenefits: [
      { title: 'Instant Authentic Flavor', description: 'Eliminates 30 minutes of frying onion prep while delivering rich savory umami flavor.' },
      { title: 'Curry Thickening Agent', description: 'Crushes easily to thicken gravies for korma, qorma, and nihari without flour.' },
      { title: 'Antioxidant Retention', description: 'Onion quercetin antioxidants remain stable during controlled temperature frying.' }
    ],
    cutDescription: 'Crispy fried onion slices, oil-drained and packed crunch-fresh.',
    cookingUses: [
      { title: 'Biryani Layering (Birista)', description: 'Scatter between rice layers and on top along with saffron milk for dum biryani.' },
      { title: 'Korma & Haleem Base', description: 'Crush into yogurt to form authentic rich korma gravy or sprinkle over hot haleem.' },
      { title: 'Curry Garnishing', description: 'Top dal, nihari, or pulao right before serving for instant restaurant presentation.' }
    ],
    storageInstructions: 'Store in cool dry pantry or refrigerator in airtight sealed pouch. Stays crispy for up to 60 days.',
    hygieneInformation: 'Fried under strict oil-temperature control in clean food-grade oil, spun-drained of excess oil, and nitrogen-sealed.',
    faq: [
      { question: 'Are these onions soggy or crispy?', answer: 'They are ultra-crispy! Our centrifuge oil-draining process guarantees maximum crunch.' },
      { question: 'Is Palm Oil used for frying?', answer: 'No, we fry in clean refined vegetable oil under strict health standards.' },
      { question: 'How long do they stay crispy after opening?', answer: 'Reseal the airtight zip bag and store in fridge to keep crisp for months.' }
    ],
    prices: { '100g': 199, '250g': 449 },
    sale: true
  },
  {
    id: 26,
    name: 'Peas, Cabbage, Carrot & Cauliflower Mix',
    slug: 'peas-cabbage-carrot-cauliflower-mix',
    urdu: 'مٹر، گوبھی، گاجر مکس',
    cat: 'Mixes',
    icon: '🥗',
    image: 'assets/products/seasonal-mix.webp',
    description: 'A fresh family vegetable mix with peas, cabbage, carrot and cauliflower.',
    shortDescription: 'A balanced four-vegetable mix of green peas, shredded cabbage, diced carrots, and cauliflower florets, ready for veg salan or fried rice.',
    nutritionSummary: {
      calories: '42 kcal',
      carbs: '8.9g',
      protein: '2.1g',
      fat: '0.3g',
      fiber: '2.9g',
      keyVitamins: 'Vitamin A, Vitamin C, Vitamin K, Folate'
    },
    nutrients: [
      { name: 'Multivitamin Complex', amount: 'Natural', benefit: 'Broad spectrum of vitamins A, C, and K from 4 distinct vegetables.' },
      { name: 'Prebiotic & Soluble Fiber', amount: '2.9 g', benefit: 'Supports bowel regularity and beneficial gut flora.' },
      { name: 'Sulforaphane & Carotenoids', amount: 'Phytochemicals', benefit: 'Can help protect tissues against free radical oxidation.' }
    ],
    healthBenefits: [
      { title: 'Diverse Plant Spectrum', description: 'Eating multiple plant types in one meal encourages a healthier, more diverse gut microbiome.' },
      { title: 'Daily Immunity Boost', description: 'Combines cruciferous sulforaphane, pea protein, and carrot beta-carotene for immune defense.' },
      { title: 'Convenient Family Cooking', description: 'Zero chopping required for a multi-veg dinner packed with natural nutrition.' }
    ],
    cutDescription: 'Precision cut mix: shelled peas, fine cabbage strips, 8mm carrot dice, and medium cauliflower florets.',
    cookingUses: [
      { title: 'Mixed Veg Curry', description: 'Simmer with onion-tomato masala, cumin, coriander, and garam masala.' },
      { title: 'Vegetable Fried Rice', description: 'Stir-fry with cooked rice, soy sauce, and white pepper on high heat.' },
      { title: 'Veg Soup & Stews', description: 'Add to chicken or legume soups for color and nutrient volume.' }
    ],
    storageInstructions: 'Refrigerate at 2°C to 4°C in sealed box. Best within 3 to 4 days.',
    hygieneInformation: 'Individually sanitized and prepped vegetables combined under hygienic room conditions.',
    faq: [
      { question: 'What is the ratio of vegetables inside?', answer: 'Equally balanced between peas, cabbage, carrots, and cauliflower florets.' },
      { question: 'Is this suitable for vegetable soups?', answer: 'Yes, it makes an outstanding quick base for home soups.' },
      { question: 'Are any preservatives added?', answer: 'Zero preservatives; 100% fresh natural produce.' }
    ],
    prices: { '500g': 349, '1kg': 649 },
    sale: true
  },
  {
    id: 27,
    name: 'Capsicum Slice Cut',
    slug: 'capsicum-slice-cut',
    urdu: 'شملہ مرچ سلائس',
    cat: 'Pre-cut',
    icon: '🫑',
    image: 'assets/products/green-capsicum.webp',
    description: 'Crisp green capsicum sliced for pizza, curries and stir-fries.',
    shortDescription: 'Deseeded fresh green bell pepper strips cut to uniform length, perfect for pizza toppings, chicken fajitas, and karahi garnishing.',
    nutritionSummary: {
      calories: '20 kcal',
      carbs: '4.6g',
      protein: '0.9g',
      fat: '0.2g',
      fiber: '1.7g',
      keyVitamins: 'Vitamin C, Vitamin B6, Vitamin K1, Folate'
    },
    nutrients: [
      { name: 'Vitamin C', amount: '80.4 mg', benefit: 'Provides over 100% daily value supporting skin collagen and immune cells.' },
      { name: 'Lutein', amount: '358 mcg', benefit: 'May support eye macula health.' },
      { name: 'Dietary Fiber', amount: '1.7 g', benefit: 'Supports bowel motility and gastric digestion.' }
    ],
    healthBenefits: [
      { title: 'Collagen & Skin Resilience', description: 'High Vitamin C concentration supports healthy collagen formation in skin.' },
      { title: 'Eye Wellness Support', description: 'Contains lutein carotenoids that support vision clarity.' },
      { title: 'Low Calorie Flavor & Crunch', description: 'Enhances dishes with aromatic sweetness without adding fat or sugar.' }
    ],
    cutDescription: 'Uniform 5mm wide julienne strips deseeded and stem-removed.',
    cookingUses: [
      { title: 'Pizza Topping', description: 'Scatter directly over cheese pizza before baking for sweet charred pepper flavor.' },
      { title: 'Chicken Jalfrezi & Fajitas', description: 'Stir-fry with sliced chicken, onions, and fajita spices.' },
      { title: 'Karahi & Handi Finishing', description: 'Toss into karahi during last 2 minutes for vibrant green crunch.' }
    ],
    storageInstructions: 'Refrigerate at 2°C to 4°C in sealed box. Best within 3 to 4 days.',
    hygieneInformation: 'Core and seeds removed, outer skin sanitized in cold water, precision sliced.',
    faq: [
      { question: 'Are the white inner seeds removed?', answer: 'Yes, 100% deseeded and cored before slicing.' },
      { question: 'Can I bake these on pizza directly?', answer: 'Yes, drop them raw onto your pizza; they roast beautifully in the oven.' },
      { question: 'Do they stay crunchy in the fridge?', answer: 'Yes, stored in their airtight container they retain crispness for up to 4 days.' }
    ],
    prices: { '250g': 139, '500g': 259 }
  },
  {
    id: 28,
    name: 'Beetroot Juice Cut',
    slug: 'beetroot-juice-cut',
    urdu: 'جوس کے لیے کٹا چقندر',
    cat: 'Juice Cuts',
    icon: '🟣',
    image: 'assets/products/beetroot-cubes.webp',
    description: 'Peeled beetroot cut into juicer-friendly pieces.',
    shortDescription: 'Raw peeled beetroot cut into large wedge pieces sized to fit directly into juicer chutes and high-speed blenders without clogging.',
    nutritionSummary: {
      calories: '43 kcal',
      carbs: '9.6g',
      protein: '1.6g',
      fat: '0.2g',
      fiber: '2.8g',
      keyVitamins: 'Dietary Nitrates, Betalains, Folate, Manganese'
    },
    nutrients: [
      { name: 'Inorganic Nitrates', amount: 'High level', benefit: 'Converts to nitric oxide, supporting arterial dilation and exercise stamina.' },
      { name: 'Betacyanin', amount: 'Red pigment', benefit: 'Potent cellular antioxidant supporting blood and liver health.' },
      { name: 'Folate', amount: '109 mcg', benefit: 'Supports cellular division and red blood cell formation.' }
    ],
    healthBenefits: [
      { title: 'Blood Flow & Energy Boost', description: 'Nitric oxide production supports blood vessel relaxation, improving oxygen delivery.' },
      { title: 'Natural Detoxification', description: 'Betalain antioxidants aid liver enzyme processing of daily metabolic waste.' },
      { title: 'Juicing Convenience', description: 'No peeling or tough slicing needed; drop straight into your cold-press juicer.' }
    ],
    cutDescription: 'Large 3cm wedge cuts peeled clean for cold-press juicers and blenders.',
    cookingUses: [
      { title: 'ABC Fresh Juice', description: 'Juice with Apple, Beetroot, and Carrot for classic daily wellness tonic.' },
      { title: 'Pre-Workout Detox Drink', description: 'Blend with ginger, lemon, and mint for a natural stamina-boosting shot.' }
    ],
    storageInstructions: 'Keep refrigerated in airtight packaging at 2°C to 4°C. Best within 4 days.',
    hygieneInformation: 'Peeled, wedge-sliced, washed in chilled sanitized water, and sealed.',
    faq: [
      { question: 'Will these fit in standard juicer chutes?', answer: 'Yes! We cut them into 3cm wedges designed specifically to pass through standard juicer tubes.' },
      { question: 'Are these cooked or raw?', answer: '100% raw, fresh peeled beetroot wedges packed with live enzymes and nitrates.' },
      { question: 'Can I also boil these for salad?', answer: 'Yes, you can also boil or roast these wedges easily.' }
    ],
    prices: { '500g': 199, '1kg': 369 },
    sale: true
  },
  {
    id: 29,
    name: 'Whole Apple Gourd',
    slug: 'whole-apple-gourd',
    urdu: 'ثابت ٹنڈا',
    cat: 'Whole',
    icon: '🟢',
    image: 'assets/products/bottle-gourd-cubes.webp',
    description: 'Fresh whole apple gourds selected and packed for curry.',
    shortDescription: 'Tender, smooth green whole apple gourds (tinda) selected for soft seeds and thin skin, ideal for traditional home-style tinda masala.',
    nutritionSummary: {
      calories: '21 kcal',
      carbs: '4.2g',
      protein: '1.4g',
      fat: '0.2g',
      fiber: '1.3g',
      keyVitamins: 'Potassium, Vitamin C, Calcium, Phosphorus'
    },
    nutrients: [
      { name: 'Dietary Water', amount: '93.5%', benefit: 'Supports bodily hydration and gentle digestive transit.' },
      { name: 'Potassium', amount: '210 mg', benefit: 'Is a source of minerals supporting muscle health and blood pressure balance.' },
      { name: 'Soluble Fiber', amount: '1.3 g', benefit: 'Provides soft digestive bulk.' }
    ],
    healthBenefits: [
      { title: 'Stomach Cooling & Soothing', description: 'Naturally alkaline and high in moisture, soothing acidity and stomach discomfort.' },
      { title: 'Kidney & Hydration Support', description: 'Encourages fluid balance and supports natural kidney filtration.' },
      { title: 'Weight Management', description: 'Very low calorie content allows generous meal portions without calorie excess.' }
    ],
    cutDescription: 'Whole, firm apple gourds selected for smooth skin and green color.',
    cookingUses: [
      { title: 'Bharwan Tinda', description: 'Slit crosswise, stuff with spice mixture (amchur, coriander, red chili), and pan roast.' },
      { title: 'Tinda Shorba Curry', description: 'Peel, quarter, and cook in onion-tomato gravy with garam masala.' }
    ],
    storageInstructions: 'Refrigerate in vegetable drawer at 3°C to 6°C for up to 5 days.',
    hygieneInformation: 'Sanitized water washed, quality inspected for seed tenderness, and packed fresh.',
    faq: [
      { question: 'Are these tinda gourds tender or hard-seeded?', answer: 'We select young tender apple gourds with tiny soft seeds.' },
      { question: 'Do I need to peel them before cooking?', answer: 'Yes, lightly scrape or peel the thin outer green skin before slicing.' },
      { question: 'Is tinda good for light digestive diets?', answer: 'Yes, it is one of the easiest vegetables to digest.' }
    ],
    prices: { '500g': 179, '1kg': 329 }
  },
  {
    id: 30,
    name: 'Apple Gourd Slices',
    slug: 'apple-gourd-slices',
    urdu: 'ٹنڈا سلائس',
    cat: 'Pre-cut',
    icon: '🟢',
    image: 'assets/products/sponge-gourd-slices.webp',
    description: 'Apple gourd washed and cut into even round slices.',
    shortDescription: 'Peeled apple gourd (tinda) cut into 6mm round slices, ready to cook into quick tinda bhujia or simmer in curry gravy.',
    nutritionSummary: {
      calories: '21 kcal',
      carbs: '4.2g',
      protein: '1.4g',
      fat: '0.2g',
      fiber: '1.3g',
      keyVitamins: 'Vitamin C, Potassium, Calcium'
    },
    nutrients: [
      { name: 'Potassium', amount: '210 mg', benefit: 'May support healthy blood pressure and fluid regulation.' },
      { name: 'Vitamin C', amount: '14 mg', benefit: 'Supports skin collagen and immune cell wellness.' },
      { name: 'Dietary Fiber', amount: '1.3 g', benefit: 'Aids smooth digestive motility.' }
    ],
    healthBenefits: [
      { title: 'Light Digestive Comfort', description: 'Extremely easy on the stomach, providing soothing hydration and light energy.' },
      { title: 'Fluid Balance Care', description: 'High natural moisture content assists daily body hydration.' },
      { title: 'Calorie Conscious Diets', description: 'Fills your salan bowl with low-calorie, high-nutrient vegetable goodness.' }
    ],
    cutDescription: 'Peeled and sliced into 6mm round circular discs.',
    cookingUses: [
      { title: 'Tinda Bhujia', description: 'Saute in oil with cumin seeds, green chilies, turmeric, and fresh coriander.' },
      { title: 'Tinda Gosht Curry', description: 'Simmer along with mutton or chicken curry for a tender vegetable meat salan.' }
    ],
    storageInstructions: 'Refrigerate at 2°C to 4°C in sealed box. Best within 2 to 3 days.',
    hygieneInformation: 'Outer skin carved away, washed in sanitized water, sliced uniform.',
    faq: [
      { question: 'Is the skin already peeled off?', answer: 'Yes, 100% peeled and ready to put straight into your cooking pot.' },
      { question: 'How quickly do these slices cook?', answer: 'They cook to soft tender perfection in just 8 to 10 minutes.' },
      { question: 'Are any seeds hard?', answer: 'No, we pick only tender young gourds with soft edible seeds.' }
    ],
    prices: { '500g': 229, '1kg': 419 }
  },
  {
    id: 31,
    name: 'Apple Gourd Cubes',
    slug: 'apple-gourd-cubes',
    urdu: 'ٹنڈا کیوبز',
    cat: 'Pre-cut',
    icon: '🟢',
    image: 'assets/products/bottle-gourd-cubes.webp',
    description: 'Apple gourd peeled and cut into neat cubes.',
    shortDescription: 'Fresh peeled tinda diced into 1.5cm uniform cubes, perfect for traditional tinda masala curry and vegetable stew.',
    nutritionSummary: {
      calories: '21 kcal',
      carbs: '4.2g',
      protein: '1.4g',
      fat: '0.2g',
      fiber: '1.3g',
      keyVitamins: 'Vitamin C, Potassium, Calcium, Magnesium'
    },
    nutrients: [
      { name: 'Potassium', amount: '210 mg', benefit: 'Can contribute to normal muscle function and circulatory balance.' },
      { name: 'Vitamin C', amount: '14 mg', benefit: 'Supports natural immune defense mechanisms.' },
      { name: 'Dietary Fiber', amount: '1.3 g', benefit: 'Promotes healthy digestive transit.' }
    ],
    healthBenefits: [
      { title: 'Stomach Soothing Properties', description: 'Soft gourd pulp gently supports digestion without causing bloating.' },
      { title: 'Hydration & Kidney Care', description: 'High fluid content aids natural fluid balance and renal filtration.' },
      { title: 'Healthy Weight Support', description: 'Low caloric density ideal for low-fat home meals.' }
    ],
    cutDescription: 'Peeled 15mm x 15mm uniform diced cubes.',
    cookingUses: [
      { title: 'Tinda Masala Salan', description: 'Cook with onions, tomatoes, ginger, and cumin for everyday family lunch.' },
      { title: 'Dal Tinda', description: 'Combine with moong or masoor dal for a healthy protein-rich vegetable dal.' }
    ],
    storageInstructions: 'Refrigerate at 2°C to 4°C in sealed box. Best within 3 days.',
    hygieneInformation: 'Peeled, stem carved, washed in sanitized water, diced and packed fresh.',
    faq: [
      { question: 'Do I need to wash these cubes?', answer: 'No, pre-washed in sanitized chilled water and ready to cook.' },
      { question: 'Are these cubes suitable for dal?', answer: 'Yes, they blend wonderfully into lentil soups and dals.' },
      { question: 'Is the skin removed?', answer: 'Yes, fully peeled.' }
    ],
    prices: { '500g': 229, '1kg': 419 },
    sale: true
  },
  {
    id: 32,
    name: 'Whole Sweet Corn',
    slug: 'whole-sweet-corn',
    urdu: 'ثابت مکئی',
    cat: 'Whole',
    icon: '🌽',
    image: 'assets/products/seasonal-mix.webp',
    description: 'Fresh whole sweet corn cobs, ready to boil or grill.',
    shortDescription: 'Farm-fresh whole sweet corn cobs with husk intact to retain juicy natural sweetness, ideal for street-style bhutta grilling or boiling.',
    nutritionSummary: {
      calories: '86 kcal',
      carbs: '19.0g',
      protein: '3.2g',
      fat: '1.2g',
      fiber: '2.7g',
      keyVitamins: 'Lutein, Zeaxanthin, Vitamin B5, Magnesium, Phosphorus'
    },
    nutrients: [
      { name: 'Lutein & Zeaxanthin', amount: '644 mcg', benefit: 'Protects eye macular tissues against blue light and oxidation.' },
      { name: 'Ferulic Acid', amount: 'Antioxidant', benefit: 'Polyphenol antioxidant content increases when corn is cooked.' },
      { name: 'Dietary Fiber', amount: '2.7 g', benefit: 'May support healthy gut microbiome and bowel regularity.' }
    ],
    healthBenefits: [
      { title: 'Ocular Protection', description: 'Carotenoid antioxidants support macular pigment density and vision clarity.' },
      { title: 'Sustained Energy', description: 'Complex carbohydrates provide long-lasting metabolic energy.' },
      { title: 'Gut Prebiotic Support', description: 'Insoluble fiber encourages bowel regularity and colon health.' }
    ],
    cutDescription: 'Whole full-length sweet corn cobs with husk and silk intact.',
    cookingUses: [
      { title: 'Grilled Bhutta', description: 'Grill over charcoal flame, brush with butter, lime juice, and chaat masala.' },
      { title: 'Boiled Corn on Cob', description: 'Boil in salted water with a pinch of sugar for 8 minutes until plump.' }
    ],
    storageInstructions: 'Refrigerate in husk at 2°C to 5°C. Best enjoyed within 3 days for maximum natural sweetness.',
    hygieneInformation: 'Farm inspected for plump juicy kernels and husk freshness.',
    faq: [
      { question: 'How long should I boil whole sweet corn cobs?', answer: 'Boil in rolling hot salted water for 7 to 9 minutes until tender.' },
      { question: 'Is this sweet corn or traditional field corn?', answer: '100% genuine yellow sweet corn with juicy, sweet kernels.' },
      { question: 'Does keeping husk on maintain sweetness?', answer: 'Yes! The natural husk protects kernels from drying out in the fridge.' }
    ],
    prices: { '2 pcs': 199, '4 pcs': 369 }
  },
  {
    id: 33,
    name: 'Peeled Sweet Corn',
    slug: 'peeled-sweet-corn',
    urdu: 'چھلی ہوئی مکئی',
    cat: 'Essentials',
    icon: '🌽',
    image: 'assets/products/seasonal-mix.webp',
    description: 'Sweet corn cobs with husk removed, ready for cooking.',
    shortDescription: 'Sweet corn cobs cleanly stripped of husk and silk threads, ready to boil, grill, or cut into cobette portions.',
    nutritionSummary: {
      calories: '86 kcal',
      carbs: '19.0g',
      protein: '3.2g',
      fat: '1.2g',
      fiber: '2.7g',
      keyVitamins: 'Lutein, Zeaxanthin, Vitamin B1, Magnesium'
    },
    nutrients: [
      { name: 'Lutein & Zeaxanthin', amount: '644 mcg', benefit: 'Can contribute to eye health and macular protection.' },
      { name: 'Thiamine (Vitamin B1)', amount: '0.2 mg', benefit: 'Supports cellular energy conversion and nerve health.' },
      { name: 'Magnesium', amount: '37 mg', benefit: 'Is a source of minerals aiding muscle relaxation and heart rhythm.' }
    ],
    healthBenefits: [
      { title: 'Vision & Macular Care', description: 'Rich carotenoids protect eyes against age-related oxidative strain.' },
      { title: 'Metabolic Energy', description: 'B-complex vitamins assist in turning food into active physical stamina.' },
      { title: 'Prebiotic Wellness', description: 'Natural fiber nourishes beneficial gut bacteria.' }
    ],
    cutDescription: 'Husk-removed, silk-cleared whole sweet corn cobs.',
    cookingUses: [
      { title: 'Butter Garlic Corn Cobettes', description: 'Cut into 2-inch mini cobs, boil, and toss in warm garlic butter.' },
      { title: 'Oven Roasted Sweet Corn', description: 'Wrap in foil with butter and chili powder, roast at 200°C for 15 mins.' }
    ],
    storageInstructions: 'Refrigerate in sealed bag at 2°C to 4°C. Best consumed within 3 days.',
    hygieneInformation: 'Husk peeled, silk threads removed, washed in sanitized water, packed clean.',
    faq: [
      { question: 'Are the corn silk threads cleaned off?', answer: 'Yes, we remove virtually all fine silk threads so it is ready to cook.' },
      { question: 'Can I cut these cobs into smaller pieces?', answer: 'Yes, use a sharp chef knife to chop into 2-inch mini cobettes.' },
      { question: 'Are these cobs fresh or frozen?', answer: '100% fresh, raw peeled sweet corn cobs delivered cold.' }
    ],
    prices: { '2 pcs': 229, '4 pcs': 419 }
  },
  {
    id: 34,
    name: 'Sweet Corn Kernels',
    slug: 'sweet-corn-kernels',
    urdu: 'مکئی کے دانے',
    cat: 'Essentials',
    icon: '🌽',
    image: 'assets/products/fresh-peas.webp',
    description: 'Fresh sweet corn kernels removed from the cob and packed clean.',
    shortDescription: 'Plump, golden sweet corn kernels sliced fresh off the cob, ready to toss into spicy cup corn, soups, pasta, and salads.',
    nutritionSummary: {
      calories: '86 kcal',
      carbs: '19.0g',
      protein: '3.2g',
      fat: '1.2g',
      fiber: '2.7g',
      keyVitamins: 'Lutein, Zeaxanthin, Vitamin B5, Fiber, Phosphorus'
    },
    nutrients: [
      { name: 'Lutein', amount: '644 mcg', benefit: 'Can contribute to eye protection against oxidative blue light strain.' },
      { name: 'Dietary Fiber', amount: '2.7 g', benefit: 'Supports healthy bowel transit and feeling of fullness.' },
      { name: 'Phosphorus', amount: '89 mg', benefit: 'Is a source of essential minerals supporting bone and cell membrane structure.' }
    ],
    healthBenefits: [
      { title: 'Eye Health Protection', description: 'Concentrated lutein pigments support retinal health and visual comfort.' },
      { title: 'Prebiotic Fiber Power', description: 'Supports gut microbiome balance and smooth bowel movement.' },
      { title: 'Clean Natural Energy', description: 'Quality complex carbs fuel daily physical and mental activities.' }
    ],
    cutDescription: 'Whole intact sweet corn kernels sliced cleanly from cob base.',
    cookingUses: [
      { title: 'Butter Masala Cup Corn', description: 'Steam for 3 minutes, toss with butter, lemon juice, chaat masala, and chili flakes.' },
      { title: 'Corn & Cheese Pizza / Pasta', description: 'Scatter over pizza dough or fold into creamy penne pasta.' },
      { title: 'Corn Soup & Salads', description: 'Simmer in chicken corn soup or toss into cold mayo pasta salad.' }
    ],
    storageInstructions: 'Refrigerate at 2°C to 4°C for up to 4 days, or freeze in zip pouch for up to 6 months.',
    hygieneInformation: 'Kernels knife-cut from cob, flotation sanitized in cold water, drained and sealed.',
    faq: [
      { question: 'Are these raw sweet corn kernels?', answer: 'Yes, fresh raw kernels cut off the cob. Steam or boil for 3 minutes before eating.' },
      { question: 'Are these better than canned corn?', answer: 'Much better! 100% fresh with no added sodium, preservatives, or tin can taste.' },
      { question: 'Can I freeze unused kernels?', answer: 'Yes, place in a freezer bag and freeze for up to 6 months.' }
    ],
    prices: { '250g': 199, '500g': 369 },
    sale: true
  },
  {
    id: 35,
    name: 'Large Green Chilies',
    slug: 'large-green-chilies',
    urdu: 'بڑی ہری مرچ',
    cat: 'Whole',
    icon: '🌶️',
    image: 'assets/products/green-chilies.webp',
    description: 'Fresh large mild green chilies for stuffing and curries.',
    shortDescription: 'Plump, mild green chilies selected for low heat and sturdy outer skin, perfect for Achari Mirch, Bharwan Mirch, or pakora stuffing.',
    nutritionSummary: {
      calories: '40 kcal',
      carbs: '8.8g',
      protein: '1.9g',
      fat: '0.4g',
      fiber: '1.5g',
      keyVitamins: 'Capsaicin, Vitamin C, Vitamin A, Vitamin B6'
    },
    nutrients: [
      { name: 'Capsaicin Bioactives', amount: 'Mild level', benefit: 'May support metabolic stimulation and natural thermal energy.' },
      { name: 'Vitamin C', amount: '143.7 mg', benefit: 'Provides over 150% daily value supporting immune resilience.' },
      { name: 'Provitamin A', amount: 'Mixed carotenoids', benefit: 'Can contribute to mucosal immunity and vision defense.' }
    ],
    healthBenefits: [
      { title: 'Immune Protection', description: 'Exceptionally high Vitamin C concentration reinforces white blood cell activity.' },
      { title: 'Metabolic & Digestive Fire', description: 'Capsaicin stimulates digestive secretions and natural metabolic rate.' },
      { title: 'Flavorful Low Heat', description: 'Provides rich green chili aroma without intense tongue-burning heat.' }
    ],
    cutDescription: 'Whole 10-12cm long mild green chilies with stem attached.',
    cookingUses: [
      { title: 'Mirchi ke Pakore', description: 'Slit, remove seeds, stuff with spiced potato mash, dip in besan, and deep fry.' },
      { title: 'Achari Mirch', description: 'Sauté whole with mustard seeds, fennel, amchur, and kalonji for pickle side.' },
      { title: 'Salad & Salan Slit', description: 'Slit lengthways and drop into mutton karahi or biryani during dum.' }
    ],
    storageInstructions: 'Store in refrigerator crisper at 3°C to 6°C in breathable packaging for up to 7 days.',
    hygieneInformation: 'Washed in sanitized water, air-dried, and sorted for stem intactness and firm skin.',
    faq: [
      { question: 'Are these large chilies very spicy?', answer: 'No, large green chilies are mild with subtle warm heat, ideal for stuffing.' },
      { question: 'Can I remove the seeds to make them zero heat?', answer: 'Yes! Slit down the side and scrape out seed rib for zero-heat chili flavor.' },
      { question: 'Are they stem intact?', answer: 'Yes, stems are intact which helps retain fresh chili firmness.' }
    ],
    prices: { '250g': 129, '500g': 239 }
  },
  {
    id: 36,
    name: 'Small Green Chilies',
    slug: 'small-green-chilies',
    urdu: 'چھوٹی ہری مرچ',
    cat: 'Whole',
    icon: '🌶️',
    image: 'assets/products/green-chilies.webp',
    description: 'Fresh small green chilies for chutneys and seasoning.',
    shortDescription: 'Fiery small green chilies (hari mirch) bursting with pungent capsaicin heat, essential for spicy chutneys, handi temperings, and curries.',
    nutritionSummary: {
      calories: '40 kcal',
      carbs: '8.8g',
      protein: '1.9g',
      fat: '0.4g',
      fiber: '1.5g',
      keyVitamins: 'Capsaicin, Vitamin C, Vitamin A, Potassium'
    },
    nutrients: [
      { name: 'Capsaicin', amount: 'High concentration', benefit: 'Can stimulate thermogenesis and endorphin release.' },
      { name: 'Vitamin C', amount: '242 mg', benefit: 'Extremely rich source supporting immune defenses and skin cell care.' },
      { name: 'Beta-Carotene', amount: '534 mcg', benefit: 'Supports vision and cell membrane protection.' }
    ],
    healthBenefits: [
      { title: 'Thermogenic Metabolism Boost', description: 'Capsaicin increases body heat production, aiding caloric expenditure.' },
      { title: 'Sinus & Airway Clearance', description: 'Pungent aroma helps open nasal passages and clear sinus congestion.' },
      { title: 'Natural Endorphin Release', description: 'Pungency triggers brain endorphin release for post-meal satisfaction.' }
    ],
    cutDescription: 'Whole small 4-5cm hot green chilies sorted for firmness and heat.',
    cookingUses: [
      { title: 'Handi & Dal Tadka', description: 'Chop fine or slit and drop into hot oil with cumin for aromatic tempering.' },
      { title: 'Spicy Hari Chutney', description: 'Blend with mint, coriander, garlic, and lemon juice.' },
      { title: 'Kachumber Salad Kick', description: 'Dice micro-fine into onion-tomato salad for authentic Pakistani spiciness.' }
    ],
    storageInstructions: 'Remove stems and store in paper-towel lined airtight container in fridge (2°C-5°C). Keeps fresh for 10 days.',
    hygieneInformation: 'Triple-washed in sanitized water, surface dried to prevent moisture rot, and quality sorted.',
    faq: [
      { question: 'How spicy are these small chilies?', answer: 'These are traditional hot Pakistani green chilies with a strong, spicy kick.' },
      { question: 'How do I keep them fresh longer at home?', answer: 'Pluck off green stems and keep in a dry paper-lined container in the fridge.' },
      { question: 'Are these pre-washed?', answer: 'Yes, sanitized water washed and air-dried.' }
    ],
    prices: { '100g': 79, '250g': 149 }
  },
  {
    id: 37,
    name: 'Chinese Carrot Slices',
    slug: 'chinese-carrot-slices',
    urdu: 'چائنیز گاجر سلائس',
    cat: 'Pre-cut',
    icon: '🥕',
    image: 'assets/products/carrot-julienne.webp',
    description: 'Fresh carrots cut into thin diagonal slices for Chinese dishes.',
    shortDescription: 'Fresh carrots cut into elegant thin diagonal oval slices, designed for authentic Chinese wok presentation, vegetable Manchurian, and soups.',
    nutritionSummary: {
      calories: '41 kcal',
      carbs: '9.6g',
      protein: '0.9g',
      fat: '0.2g',
      fiber: '2.8g',
      keyVitamins: 'Vitamin A (Beta-Carotene), Vitamin K1, Potassium'
    },
    nutrients: [
      { name: 'Beta-Carotene', amount: '8285 mcg', benefit: 'Converts to Vitamin A, supporting normal vision and mucosal defense.' },
      { name: 'Dietary Fiber', amount: '2.8 g', benefit: 'May support healthy digestion and gut microbiome balance.' },
      { name: 'Potassium', amount: '320 mg', benefit: 'Is a source of minerals aiding normal blood pressure.' }
    ],
    healthBenefits: [
      { title: 'Eye & Mucosal Care', description: 'High beta-carotene provitamin A supports eye lens health and mucosal tissue integrity.' },
      { title: 'Digestive Regularity', description: 'Provides natural soluble and insoluble fibers for healthy bowel transit.' },
      { title: 'Wok Cooking Efficiency', description: 'Diagonal cut maximizes surface area for rapid heat transfer and tender-crisp texture.' }
    ],
    cutDescription: 'Precision 2mm thin diagonal oval cuts (approx. 45-degree angle slices).',
    cookingUses: [
      { title: 'Chinese Stir-Fry & Sweet & Sour Chicken', description: 'Stir-fry with capsicum, onion, and pineapple in wok.' },
      { title: 'Hot & Sour / Vegetable Soup', description: 'Simmer in chicken broth for classic Asian soup texture.' },
      { title: 'Pickled Carrot Slices', description: 'Steep in rice vinegar, sugar, and salt for Asian quick pickle.' }
    ],
    storageInstructions: 'Refrigerate at 2°C to 4°C in sealed box. Best within 4 days.',
    hygieneInformation: 'Peeled, diagonally sliced, washed in chilled sanitized water, drained and packed.',
    faq: [
      { question: 'What makes these different from julienne carrots?', answer: 'These are thin oval slices cut at a 45-degree angle, ideal for restaurant Chinese wok dishes.' },
      { question: 'Do they cook quickly?', answer: 'Yes! Their 2mm thickness cooks in 2-3 minutes in hot stir-fries.' },
      { question: 'Are they pre-washed and peeled?', answer: 'Yes, fully peeled, washed, and ready to cook.' }
    ],
    prices: { '250g': 159, '500g': 289 }
  },
  {
    id: 39,
    name: 'Fresh Lemons',
    slug: 'fresh-lemons',
    urdu: 'تازہ لیموں',
    cat: 'Whole',
    icon: '🍋',
    image: 'assets/products/fresh-tomatoes.webp',
    description: 'Fresh juicy lemons selected, cleaned and packed.',
    shortDescription: 'Bright, thin-skinned yellow lemons selected for maximum juice yield, vivid citrus aroma, and high Vitamin C content.',
    nutritionSummary: {
      calories: '29 kcal',
      carbs: '9.3g',
      protein: '1.1g',
      fat: '0.3g',
      fiber: '2.8g',
      keyVitamins: 'Vitamin C, Citric Acid, Hesperidin, Potassium'
    },
    nutrients: [
      { name: 'Vitamin C', amount: '53 mg', benefit: 'Provides nearly 90% daily value supporting immunity and iron absorption.' },
      { name: 'Citric Acid', amount: '4800 mg', benefit: 'Promotes urine alkalinity and may support kidney stone prevention.' },
      { name: 'Bioflavonoids (Hesperidin)', amount: 'Antioxidants', benefit: 'May support blood vessel strength and capillary health.' }
    ],
    healthBenefits: [
      { title: 'Immune & Skin Support', description: 'Abundant Vitamin C stimulates white blood cell activity and collagen synthesis.' },
      { title: 'Iron Absorption Helper', description: 'Squeezing fresh lemon juice over spinach or lentils boosts non-heme iron uptake.' },
      { title: 'Urinary & Kidney Care', description: 'Natural citric acid increases urinary citrate, helping discourage kidney stone formation.' }
    ],
    cutDescription: 'Whole thin-skinned lemons washed and sorted for juice quality.',
    cookingUses: [
      { title: 'Fresh Nimbu Pani / Lemonade', description: 'Squeeze into cold water with mint, sugar, and black salt for ultimate summer drink.' },
      { title: 'Salad Dressing & Marinades', description: 'Whisk lemon juice with olive oil, black pepper, and salt for green salad dressing.' },
      { title: 'Garnishing Fish & Karahi', description: 'Squeeze over grilled fish, tikka, or mutton karahi right before eating.' }
    ],
    storageInstructions: 'Store in refrigerator crisper at 3°C to 7°C for up to 2 weeks.',
    hygieneInformation: 'Washed in food-safe purified water, skin polished, and hand inspected.',
    faq: [
      { question: 'Are these lemons thin-skinned and juicy?', answer: 'Yes! We select thin-skinned varieties that yield maximum juice per lemon.' },
      { question: 'How long do lemons last in the fridge?', answer: 'Refrigerated in a sealed bag, they stay juicy and fresh for up to 2-3 weeks.' },
      { question: 'Are these waxed or artificially colored?', answer: 'No wax coating or artificial coloring; 100% natural lemons.' }
    ],
    prices: { '250g': 149, '500g': 279 }
  },
  {
    id: 40,
    name: 'Whole Fenugreek',
    slug: 'whole-fenugreek',
    urdu: 'ثابت میتھی',
    cat: 'Leafy',
    icon: '🌿',
    image: 'assets/products/chopped-spinach.webp',
    description: 'Fresh whole fenugreek leaves carefully selected and cleaned.',
    shortDescription: 'Fresh green fenugreek leaves (methi) picked from tough stems, thoroughly washed, and packed for aloo methi, methi chicken, or parathas.',
    nutritionSummary: {
      calories: '49 kcal',
      carbs: '6.0g',
      protein: '4.4g',
      fat: '0.9g',
      fiber: '2.5g',
      keyVitamins: 'Iron, Trigonelline, Folate, Vitamin C, Calcium'
    },
    nutrients: [
      { name: 'Trigonelline & Galactomannan', amount: 'Bioactives', benefit: 'May support healthy blood sugar regulation and insulin sensitivity.' },
      { name: 'Dietary Iron', amount: '33.5 mg', benefit: 'Exceptionally rich natural plant iron source supporting blood vitality.' },
      { name: 'Plant Protein', amount: '4.4 g', benefit: 'Higher protein density than most leafy green vegetables.' }
    ],
    healthBenefits: [
      { title: 'Blood Sugar Regulation', description: 'Galactomannan soluble fiber and trigonelline assist in slowing glucose absorption.' },
      { title: 'Iron & Hemoglobin Booster', description: 'Remarkable iron concentration helps prevent nutritional anemia.' },
      { title: 'Lactation & Women’s Health', description: 'Traditionally valued galactagogue supporting nursing mothers.' }
    ],
    cutDescription: 'Whole unchopped tender methi leaves plucked from thick woody stalks.',
    cookingUses: [
      { title: 'Aloo Methi', description: 'Sauté with diced potatoes, garlic, red chili flakes, and turmeric in ghee.' },
      { title: 'Methi Chicken / Methi Malai Matar', description: 'Simmer with chicken or peas in rich creamy gravy.' },
      { title: 'Methi Paratha', description: 'Knead fresh leaves into whole wheat atta with spices for breakfast parathas.' }
    ],
    storageInstructions: 'Refrigerate at 2°C to 4°C wrapped with paper towel in dry container. Best within 2 to 3 days.',
    hygieneInformation: 'De-stemmed, triple-washed in sanitized water to remove sand, and gently spun dry.',
    faq: [
      { question: 'Is the bitter stem removed?', answer: 'Yes! We pluck tender leaves and discard thick bitter woody stems.' },
      { question: 'Do I need to wash it again?', answer: 'No, triple-washed and grit-free, ready to cook directly.' },
      { question: 'How do I reduce bitterness when cooking?', answer: 'Sauteing with garlic, ghee, or potatoes naturally balances methi’s pleasant herbal bitterness.' }
    ],
    prices: { '250g': 129, '500g': 239 }
  },
  {
    id: 41,
    name: 'Fresh Cooking Platter Pack',
    slug: 'fresh-cooking-platter-pack',
    urdu: 'فریش کوکنگ پلیٹر',
    cat: 'Platters',
    icon: '🥗',
    image: 'assets/products/seasonal-mix.webp',
    description: 'Lady finger, tomato, onion and green chilli packed for one convenient meal.',
    shortDescription: 'An all-in-one meal preparation kit containing pre-sliced lady finger, diced onions, fresh tomatoes, and green chilies for an instant 15-minute bhindi salan.',
    nutritionSummary: {
      calories: '38 kcal',
      carbs: '8.2g',
      protein: '1.5g',
      fat: '0.2g',
      fiber: '2.4g',
      keyVitamins: 'Vitamin C, Vitamin K, Folate, Lycopene, Potassium'
    },
    nutrients: [
      { name: 'Synergistic Antioxidants', amount: 'Lycopene + Quercetin', benefit: 'Combines tomato lycopene and onion quercetin for heart support.' },
      { name: 'Dietary Fiber', amount: '2.4 g', benefit: 'Supports gastrointestinal motility and feeling of satiety.' },
      { name: 'Vitamin C', amount: '28 mg', benefit: 'Supports white blood cell function and collagen formation.' }
    ],
    healthBenefits: [
      { title: 'Balanced Meal Preparation', description: 'Combines fiber, lycopene, allicin, and capsaicin in one complete cooking platter.' },
      { title: 'Zero Meal Prep Waste', description: 'Exact meal portions eliminate unused vegetable halves in your fridge.' },
      { title: 'Digestive & Heart Wellness', description: 'Fiber and anti-inflammatory bioactives support daily vascular and gut health.' }
    ],
    cutDescription: 'Sectioned platter containing sliced bhindi, diced onion, tomato, and green chilies.',
    cookingUses: [
      { title: 'Instant 15-Minute Bhindi Masala', description: 'Heat ghee in pan, saute onions and chilies, add tomatoes, then toss in bhindi and spices.' }
    ],
    storageInstructions: 'Refrigerate at 2°C to 4°C in sealed platter container. Best cooked within 3 days.',
    hygieneInformation: 'All four components cleaned, cut to order, and compartmentalized under clean room standards.',
    faq: [
      { question: 'How many people does one 500g platter serve?', answer: 'One 500g platter prepares a rich bhindi masala meal for 2 to 3 adults.' },
      { question: 'Are spices included in the platter?', answer: 'No spices included; just farm-fresh pre-cut vegetables ready for your home spices.' },
      { question: 'Are the items packed in separate compartments?', answer: 'Yes, compartmentalized so tomatoes do not make the bhindi soggy before cooking.' }
    ],
    prices: { '500g': 349, '1kg': 649 },
    sale: true
  },
  {
    id: 42,
    name: 'Large-Cut Gawar Beans',
    slug: 'large-cut-gawar-beans',
    urdu: 'گوار پھلی بڑا کٹ',
    cat: 'Pre-cut',
    icon: '🫛',
    image: 'assets/products/lady-finger.webp',
    description: 'Fresh gawar beans cleaned and cut into large pieces.',
    shortDescription: 'Fresh cluster beans (gawar phali) de-stringed and cut into 3cm large segments, ready for gawar aloo masala or traditional mustard seed bhujia.',
    nutritionSummary: {
      calories: '35 kcal',
      carbs: '7.1g',
      protein: '3.2g',
      fat: '0.4g',
      fiber: '3.4g',
      keyVitamins: 'Guar Gum Soluble Fiber, Iron, Calcium, Vitamin K'
    },
    nutrients: [
      { name: 'Guar Gum Soluble Fiber', amount: '3.4 g', benefit: 'Can help bind intestinal cholesterol and slow carbohydrate absorption.' },
      { name: 'Dietary Iron', amount: '1.4 mg', benefit: 'Supports red blood cell hemoglobin maintenance.' },
      { name: 'Calcium', amount: '57 mg', benefit: 'Is a source of minerals supporting bone structure.' }
    ],
    healthBenefits: [
      { title: 'Glycemic & Cholesterol Care', description: 'Famous for high natural guar gum soluble fiber that regulates post-meal blood sugar.' },
      { title: 'Digestive Regularity', description: 'Provides healthy dietary bulk that supports gut transit.' },
      { title: 'Bone & Blood Support', description: 'Contains calcium, iron, and Vitamin K for skeletal and blood health.' }
    ],
    cutDescription: 'Tough side strings pulled, cut into 30mm uniform segments.',
    cookingUses: [
      { title: 'Gawar Aloo Masala', description: 'Pressure cook or saute with potatoes, garlic, red chili, and mustard oil.' },
      { title: 'Rai Ajwain Gawar Bhujia', description: 'Temper mustard seeds and carom (ajwain) in oil, toss in gawar and cook till tender.' }
    ],
    storageInstructions: 'Refrigerate at 2°C to 4°C in sealed box. Best cooked within 3 to 4 days.',
    hygieneInformation: 'Side fibrous strings pulled by hand, washed in sanitized water, cut and packed.',
    faq: [
      { question: 'Are the tough side strings removed?', answer: 'Yes, we remove side strings so the beans cook tender without fibrous threads.' },
      { question: 'Do gawar beans take long to cook?', answer: 'Boil or pressure cook for 1 whistle, then sauté with spices for tender results.' },
      { question: 'Are these bitter?', answer: 'We select young tender cluster beans that have mild herbal flavor.' }
    ],
    prices: { '250g': 169, '500g': 309 }
  },
  {
    id: 43,
    name: 'Small-Cut Gawar Beans',
    slug: 'small-cut-gawar-beans',
    urdu: 'گوار پھلی چھوٹا کٹ',
    cat: 'Pre-cut',
    icon: '🫛',
    image: 'assets/products/lady-finger.webp',
    description: 'Fresh gawar beans cleaned and chopped into small pieces.',
    shortDescription: 'Cluster beans de-stringed and finely chopped into 8mm pieces, designed for fast tawa bhujia and mixed bean curries.',
    nutritionSummary: {
      calories: '35 kcal',
      carbs: '7.1g',
      protein: '3.2g',
      fat: '0.4g',
      fiber: '3.4g',
      keyVitamins: 'Guar Gum Soluble Fiber, Iron, Folate, Vitamin C'
    },
    nutrients: [
      { name: 'Soluble Fiber (Guar)', amount: '3.4 g', benefit: 'May support healthy blood lipid levels and digestive flora.' },
      { name: 'Dietary Iron', amount: '1.4 mg', benefit: 'Can contribute to normal oxygen transport in body tissue.' },
      { name: 'Folate', amount: '45 mcg', benefit: 'Supports cell division and energy metabolism.' }
    ],
    healthBenefits: [
      { title: 'Cholesterol & Glucose Balance', description: 'Viscous soluble guar fiber binds bile acids and slows glucose uptake.' },
      { title: 'Digestive Motility', description: 'High plant fiber encourages healthy intestinal motility.' },
      { title: 'Quick Pan Cooking', description: 'Fine 8mm cut cooks tender in half the time of whole beans.' }
    ],
    cutDescription: 'De-stringed and finely chopped into 8mm cross-section pieces.',
    cookingUses: [
      { title: 'Gawar Fry Bhujia', description: 'Saute in pan with crushed garlic, green chilies, cumin, and lemon juice.' },
      { title: 'Mixed Veg Sabzi', description: 'Combine with corn kernels and carrots for colorful side dish.' }
    ],
    storageInstructions: 'Refrigerate at 2°C to 4°C in sealed box. Best within 3 days.',
    hygieneInformation: 'Strings pulled, washed in chilled sanitized water, fine-chopped and packed.',
    faq: [
      { question: 'What is the benefit of small-cut gawar beans?', answer: 'They cook much faster in a frying pan without requiring prior boiling!' },
      { question: 'Are side strings removed?', answer: 'Yes, fully de-stringed before fine chopping.' },
      { question: 'Are these ready to cook?', answer: '100% washed, prepped, and ready for your pan.' }
    ],
    prices: { '250g': 179, '500g': 329 }
  },
  {
    id: 44,
    name: 'Chopped Green Chilies',
    slug: 'chopped-green-chilies',
    urdu: 'کٹی ہوئی ہری مرچ',
    cat: 'Pre-cut',
    icon: '🌶️',
    image: 'assets/products/green-chilies.webp',
    description: 'Fresh green chilies washed and finely chopped.',
    shortDescription: 'Fresh green chilies stem-removed and finely chopped, ready to add instant heat and fresh aroma to omelettes, kachumber, and curries.',
    nutritionSummary: {
      calories: '40 kcal',
      carbs: '8.8g',
      protein: '1.9g',
      fat: '0.4g',
      fiber: '1.5g',
      keyVitamins: 'Capsaicin, Vitamin C, Vitamin A'
    },
    nutrients: [
      { name: 'Capsaicin', amount: 'Active heat', benefit: 'Stimulates metabolism and digestive secretions.' },
      { name: 'Vitamin C', amount: '242 mg', benefit: 'Provides exceptional Vitamin C supporting immune cell defense.' },
      { name: 'Antioxidants', amount: 'Mixed', benefit: 'Helps protect body cells from free radicals.' }
    ],
    healthBenefits: [
      { title: 'Metabolic Energy', description: 'Capsaicin supports body heat production and digestive vigor.' },
      { title: 'Immune Protection', description: 'High concentration of Vitamin C supports immune system health.' },
      { title: 'Time-Saving Convenience', description: 'No chili-burning hands or spicy eyes from chopping chilies at home.' }
    ],
    cutDescription: 'Finely chopped 2mm chili pieces with stems removed.',
    cookingUses: [
      { title: 'Pakistani Desi Omelette', description: 'Whisk into eggs with chopped onions, coriander, salt, and black pepper.' },
      { title: 'Tadka & Gravies', description: 'Add to sizzling oil for instant spicy karahi or dal tempering.' },
      { title: 'Kachumber & Chaat', description: 'Sprinkle over chana chaat or fresh salad for instant spicy kick.' }
    ],
    storageInstructions: 'Refrigerate at 2°C to 4°C in sealed box. Best within 4 days.',
    hygieneInformation: 'Stems removed, washed in sanitized water, machine diced, packed in airtight container.',
    faq: [
      { question: 'Will this keep my hands safe from chili burn?', answer: 'Yes! You never have to touch raw cut chilies or burn your skin and eyes.' },
      { question: 'Are these chilies very spicy?', answer: 'They have standard medium-spicy Pakistani green chili heat.' },
      { question: 'Can I freeze chopped chilies?', answer: 'Yes, you can freeze them in an airtight box for up to 2 months.' }
    ],
    prices: { '100g': 99, '250g': 189 },
    sale: true
  },
  {
    id: 45,
    name: 'Whole Green Onions',
    slug: 'whole-green-onions',
    urdu: 'ثابت ہرا پیاز',
    cat: 'Leafy',
    icon: '🌱',
    image: 'assets/products/chopped-coriander.webp',
    description: 'Fresh whole green onions cleaned and packed.',
    shortDescription: 'Fresh scallions (hara pyaz) with crisp white bulbs and vibrant green tops, root-trimmed and triple-washed for Chinese cooking and salads.',
    nutritionSummary: {
      calories: '32 kcal',
      carbs: '7.3g',
      protein: '1.8g',
      fat: '0.2g',
      fiber: '2.6g',
      keyVitamins: 'Vitamin K, Vitamin C, Folate, Allicin'
    },
    nutrients: [
      { name: 'Vitamin K1', amount: '207 mcg', benefit: 'Provides over 170% daily value supporting blood coagulation and bone health.' },
      { name: 'Allicin & Quercetin', amount: 'Antioxidants', benefit: 'Can support vascular wellness and immune response.' },
      { name: 'Dietary Fiber', amount: '2.6 g', benefit: 'Supports bowel motility and gut microbiome health.' }
    ],
    healthBenefits: [
      { title: 'Bone & Vascular Health', description: 'Abundant Vitamin K1 works with calcium to maintain strong bones.' },
      { title: 'Antioxidant Protection', description: 'Flavonoids in green tops protect cells against oxidative damage.' },
      { title: 'Dual Culinary Flavor', description: 'Crisp mild onion bulb combined with fresh herbal green leaf aroma.' }
    ],
    cutDescription: 'Whole scallions with hairy roots carved off and yellow leaves removed.',
    cookingUses: [
      { title: 'Fried Rice & Chow Mein', description: 'Chop white bulbs for wok cooking and green tops for garnishing.' },
      { title: 'Hara Pyaz ke Parathe', description: 'Chop fine and knead into dough with carom seeds and green chili.' },
      { title: 'Soup Garnishing', description: 'Slice into rings to garnish chicken corn soup or ramen bowls.' }
    ],
    storageInstructions: 'Wrap in paper towel and refrigerate at 2°C to 4°C in sealed bag. Best within 4 days.',
    hygieneInformation: 'Roots trimmed, muddy outer skin removed, triple-washed in sanitized water.',
    faq: [
      { question: 'Are the roots trimmed off?', answer: 'Yes, dirt-holding hairy roots are carved off completely.' },
      { question: 'Do I get both white bulbs and green tops?', answer: 'Yes, full whole scallions with both white onion bulbs and fresh green leaves.' },
      { question: 'Are they pre-washed?', answer: 'Yes, thoroughly washed free of soil and sand.' }
    ],
    prices: { '250g': 119, '500g': 219 }
  },
  {
    id: 46,
    name: 'Kachumber Onion Cut',
    slug: 'kachumber-onion-cut',
    urdu: 'کچومر پیاز',
    cat: 'Salad Cuts',
    icon: '🧅',
    image: 'assets/products/chopped-onion.webp',
    description: 'Fresh onion finely cut for kachumber salad and raita.',
    shortDescription: 'Micro-diced fresh red onions cut into delicate 3mm cubes, specifically designed for kachumber salad, raita, chaat, and burger toppings.',
    nutritionSummary: {
      calories: '40 kcal',
      carbs: '9.3g',
      protein: '1.1g',
      fat: '0.1g',
      fiber: '1.7g',
      keyVitamins: 'Quercetin, Inulin Prebiotic, Vitamin C'
    },
    nutrients: [
      { name: 'Quercetin', amount: '20 mg', benefit: 'Can contribute to heart vessel wellness and cell protection.' },
      { name: 'Inulin Fiber', amount: 'Prebiotic', benefit: 'Nourishes beneficial bifidobacteria in the gut.' },
      { name: 'Vitamin C', amount: '7.4 mg', benefit: 'Supports immune cell activity.' }
    ],
    healthBenefits: [
      { title: 'Gut Prebiotic Support', description: 'Inulin prebiotic fiber nourishes friendly gut microflora.' },
      { title: 'Cardiovascular Support', description: 'Flavonoid quercetin supports healthy blood vessel tone.' },
      { title: 'Salad Elevation', description: 'Delivers delicate onion crunch without overpowering raw onion bite.' }
    ],
    cutDescription: 'Micro-fine 3mm x 3mm precision dice for raw salad integration.',
    cookingUses: [
      { title: 'Kachumber Salad', description: 'Toss with diced tomatoes, cucumbers, fresh mint, lemon juice, and black salt.' },
      { title: 'Dahi Raita', description: 'Fold into cold yogurt with roasted cumin and mint.' },
      { title: 'Chana Chaat & Bun Kabab', description: 'Top spiced chickpeas or street bun kababs for sweet onion crunch.' }
    ],
    storageInstructions: 'Refrigerate at 2°C to 4°C in airtight box. Best consumed within 3 days.',
    hygieneInformation: 'Peeled, washed in chilled sanitized water, micro-diced in cool chamber, packed clean.',
    faq: [
      { question: 'What is the difference between this and regular chopped onion?', answer: 'Kachumber cut is much finer (3mm micro-dice) designed specifically for raw salads, raita, and chaat.' },
      { question: 'Is it washed after cutting?', answer: 'We wash the whole peeled onions before micro-dicing so they retain maximum crispness.' },
      { question: 'Will it smell strong in the fridge?', answer: 'Our airtight containers seal in all onion aromas.' }
    ],
    prices: { '250g': 119, '500g': 219 }
  },
  {
    id: 47,
    name: 'Lady Finger Large Cut',
    slug: 'lady-finger-large-cut',
    urdu: 'بھِنڈی بڑا کٹ',
    cat: 'Pre-cut',
    icon: '🌿',
    image: 'assets/products/lady-finger.webp',
    description: 'Tender lady fingers washed and cut into larger pieces.',
    shortDescription: 'Tender green okra washed, stem-trimmed, and cut into sturdy 4cm long pieces, ideal for restaurant-style Bhindi Masala and Kadai Bhindi.',
    nutritionSummary: {
      calories: '33 kcal',
      carbs: '7.5g',
      protein: '1.9g',
      fat: '0.2g',
      fiber: '3.2g',
      keyVitamins: 'Mucilage Fiber, Folate, Vitamin K, Calcium'
    },
    nutrients: [
      { name: 'Mucilage Soluble Fiber', amount: '3.2 g', benefit: 'May help soothe gastric lining and support glucose stability.' },
      { name: 'Folate (Vitamin B9)', amount: '60 mcg', benefit: 'Supports red blood cell synthesis and cellular health.' },
      { name: 'Calcium', amount: '82 mg', benefit: 'Is a source of minerals supporting bone integrity.' }
    ],
    healthBenefits: [
      { title: 'Digestive Coating & Comfort', description: 'Natural mucilage fiber coats stomach walls, supporting digestive comfort.' },
      { title: 'Blood Sugar Regulation', description: 'Soluble fiber slows carbohydrate absorption in the gut.' },
      { title: 'Sturdy Curry Texture', description: 'Large 4cm cut keeps okra pods whole and intact during karahi cooking.' }
    ],
    cutDescription: 'Stem crown trimmed, cut into 40mm sturdy lengths.',
    cookingUses: [
      { title: 'Dhaba-Style Bhindi Masala', description: 'Pan-fry large pieces in mustard oil until edges brown, then toss with onion-tomato masala.' },
      { title: 'Bhindi Gosht', description: 'Add during final 10 minutes of mutton curry for rich vegetable-meat salan.' }
    ],
    storageInstructions: 'Refrigerate at 2°C to 5°C in dry container. Best within 3 to 4 days.',
    hygieneInformation: 'Washed in sanitized water, thoroughly air-dried before cutting to eliminate sliminess, packed fresh.',
    faq: [
      { question: 'Why use large cut instead of small slices?', answer: 'Large 4cm pieces hold their shape beautifully in thick gravies without breaking or getting slimy.' },
      { question: 'Are stems trimmed?', answer: 'Yes, cap crowns and tail tips are trimmed off.' },
      { question: 'Are these pre-dried?', answer: 'Yes, dried after washing so they don’t release excess sticky mucilage while frying.' }
    ],
    prices: { '250g': 179, '500g': 319 }
  },
  {
    id: 48,
    name: 'Peeled Onions',
    slug: 'peeled-onions',
    urdu: 'چھلی ہوئی پیاز',
    cat: 'Essentials',
    icon: '🧅',
    image: 'assets/products/chopped-onion.webp',
    description: 'Fresh onions peeled and packed to save preparation time.',
    shortDescription: 'Whole red/yellow onions with dry papery skin peeled off and root tips trimmed, saving you time when custom chopping at home.',
    nutritionSummary: {
      calories: '40 kcal',
      carbs: '9.3g',
      protein: '1.1g',
      fat: '0.1g',
      fiber: '1.7g',
      keyVitamins: 'Quercetin, Organosulfur, Vitamin C, Potassium'
    },
    nutrients: [
      { name: 'Quercetin', amount: '20 mg', benefit: 'Powerful antioxidant supporting vascular resilience.' },
      { name: 'Organosulfur Bioactives', amount: 'Aromatic compounds', benefit: 'Can contribute to natural antibacterial defenses.' },
      { name: 'Dietary Fiber', amount: '1.7 g', benefit: 'Supports bowel regularity.' }
    ],
    healthBenefits: [
      { title: 'Heart & Vascular Support', description: 'Quercetin and sulfur bioactives encourage healthy blood flow.' },
      { title: 'Immune Reinforcement', description: 'Contains natural antimicrobial phytonutrients.' },
      { title: 'Pantry Prep Convenience', description: 'Zero papery skin peel mess in your kitchen bin.' }
    ],
    cutDescription: 'Whole peeled onions with outer skin carved and roots trimmed.',
    cookingUses: [
      { title: 'Custom Home Slicing / Ring Cut', description: 'Slice into thick rings for burgers, onion pakoras, or custom handi cuts.' },
      { title: 'Onion Puree & Gravy Paste', description: 'Blend raw or boiled into smooth paste for royal korma gravies.' }
    ],
    storageInstructions: 'Refrigerate in airtight container at 2°C to 4°C. Keeps fresh for up to 7 days.',
    hygieneInformation: 'Air-peeled, stem and root carved, rinsed in food-safe sanitized water, packed clean.',
    faq: [
      { question: 'How long do peeled whole onions stay fresh in the fridge?', answer: 'Stored sealed in their container at 2-4°C, they stay firm and fresh for up to a week.' },
      { question: 'Are any chemicals used to peel them?', answer: 'No! Machine air-skinning followed by hand inspection and clean water rinse.' },
      { question: 'Are roots trimmed off?', answer: 'Yes, root bases and top stems are neatly carved.' }
    ],
    prices: { '500g': 199, '1kg': 369 },
    sale: true
  },
  {
    id: 49,
    name: 'Whole Onions',
    slug: 'whole-onions',
    urdu: 'ثابت پیاز',
    cat: 'Whole',
    icon: '🧅',
    image: 'assets/products/chopped-onion.webp',
    description: 'Fresh whole onions selected and packed for everyday cooking.',
    shortDescription: 'Premium farm-selected whole onions with tight papery skin and firm bulbs, perfect for long pantry storage and daily cooking essentials.',
    nutritionSummary: {
      calories: '40 kcal',
      carbs: '9.3g',
      protein: '1.1g',
      fat: '0.1g',
      fiber: '1.7g',
      keyVitamins: 'Quercetin, Prebiotic Fiber, Potassium, Vitamin B6'
    },
    nutrients: [
      { name: 'Quercetin', amount: '20 mg', benefit: 'Supports cell membrane protection against oxidative degradation.' },
      { name: 'Inulin Prebiotic', amount: '1.7 g', benefit: 'Nourishes beneficial digestive bacteria.' },
      { name: 'Potassium', amount: '146 mg', benefit: 'Is a source of essential minerals aiding fluid balance.' }
    ],
    healthBenefits: [
      { title: 'Cardiovascular Support', description: 'Flavonoids support blood vessel health and blood pressure balance.' },
      { title: 'Gut Microflora Care', description: 'Prebiotic inulin feeds beneficial intestinal probiotics.' },
      { title: 'Kitchen Cooking Staple', description: 'The foundation for virtually all Pakistani and global culinary dishes.' }
    ],
    cutDescription: 'Whole unpeeled firm onion bulbs sorted for size and weight.',
    cookingUses: [
      { title: 'Pantry Storage', description: 'Keep in ventilated basket for daily cooking needs.' },
      { title: 'Salan & Biryani Base', description: 'Peel and slice freshly for daily handi, curries, and fried birista.' }
    ],
    storageInstructions: 'Store in a cool, dark, well-ventilated dry pantry. Keeps fresh for up to 3 weeks.',
    hygieneInformation: 'Farm-inspected for dryness, firm neck, and freedom from mold or soft spots.',
    faq: [
      { question: 'Where should I store whole unpeeled onions?', answer: 'Keep in a cool, dry, dark place with good air ventilation (not in a plastic bag).' },
      { question: 'Are these onions pungent or sweet?', answer: 'They are classic medium-pungent cooking onions perfect for Pakistani curries.' },
      { question: 'What is the average shelf life?', answer: 'In a ventilated pantry, they last 2 to 3 weeks easily.' }
    ],
    prices: { '1kg': 249, '2kg': 469 }
  }
];

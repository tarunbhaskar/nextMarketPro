export async function GET(req) {
    const categories = [
        {
            id: 1,
            name: "Vegetables & Fruit",
            icon: "ph ph-carrot",
            subcategories: [
                { id: 101, name: "Potato & Tomato" },
                { id: 102, name: "Cucumber & Capsicum" }
            ]
        },
        {
            id: 2,
            name: "Beverages",
            icon: "ph ph-brandy",
            subcategories: [
                { id: 201, name: "Soda & Cocktail Mix" },
                { id: 202, name: "Sports & Energy Drinks" }
            ]
        }
    ];

    return new Response(JSON.stringify(categories), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}

import "./style.css";

const resources = [
    {
        id: 1,
        title: 'What is the Body Mass Index (BMI)',
        href: "https://www.nhs.uk/common-health-questions/lifestyle/what-is-the-body-mass-index-bmi/#:~:text=BMI%20ranges&text=below%2018.5%20%E2%80%93%20you're%20in,re%20in%20the%20obese%20range",
        description:
            "The BMI of an individual has a lot to outline based on how healthy an individual seemed to be. it's important to Understand how BMI determines if an individual is healthy and what your BMI score means based on three classification. Also, factors that are likely to affect the BMI of an individual. ",
        date: 'Nov 28, 2022',
        datetime: '2022-11-28',
        category: { title: 'BMI', href: '/BMI' },
       },
    {
        id: 2,
        title: 'Benefit of Exercising',
        href: "https://www.nhs.uk/live-well/exercise/exercise-health-benefits/",
        description:
            'Exercising is benefical to our health on daily basis and it tends not to have age range as there are different exercise that various age grade can partake on. Exercising help to reduce major illness that are currently faced in healthcare nowdays and tends to increase our life-span. ',
        date: 'Aug 04, 2021',
        datetime: '2021-08-04',
        category: { title: 'Exercise', href: '/Exercise' },
    },
    {
        id: 3,
        title: 'Benefit of Eating Healthy',
        href: "https://www.medicalnewstoday.com/articles/322268#summary",
        description:
            "Eating helathy is important and knowing the kind of food we consume and it's nutrient is essential in living a helathy lifestyle. To maintain a helathy lifestyle, we ought to balance our meal in accordance of the avaerage total calories recommended and reduce the intake of fatty food. ",
        date: 'Jul 29, 2022',
        datetime: '2022-07-29',
        category: { title: 'Nutrient', href: '/Nutrient' },
    }
]

export default function Resources() {
    return (
        <div className="bg-white py-24 sm:py-32" id="resources">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-green-900 sm:text-4xl">UNDERSTANDING THE IMPORTANCES OF HELATHY LIFESTYLE</h2>
                    <p className="mt-2 text-lg leading-8 text-yellow-600">
                        Learn more about healthy lifestyle with the articles.
                    </p>
                </div>
                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {resources.map((post) => (
                        <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                            <div className="flex items-center gap-x-4 text-xs">
                                <time dateTime={post.datetime} className="text-green-600">
                                    {post.date}
                                </time>
                                <a
                                    href={post.category.href}
                                    className="relative z-10 rounded-full bg-gray-50 py-1.5 px-3 font-medium text-gray-600 hover:bg-gray-100"
                                >
                                    {post.category.title}
                                </a>
                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                    <a href={post.href}>
                                        <span className="absolute inset-0" />
                                        {post.title}
                                    </a>
                                </h3>
                                <p className="mt-5 text-sm leading-6 text-gray-600 line-clamp-3" id="description">{post.description} <a href= {post.href} id= "read">READ MORE</a></p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}

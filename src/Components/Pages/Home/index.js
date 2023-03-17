import { DocumentIcon } from '@heroicons/react/20/solid';
import "./style.css";


const features = [
    {
        name: 'Exercise: ',
        description:
            'Regular Exercise is essential in maintaing a health lifestyle as it help in reducing the risk of disease, help manage our weight and improve our brain.',
        icon: DocumentIcon,
    },
    {
        name: 'BMI: ',
        description: "It's important that our Body Mass Index is within the recommended avearge to aviate the risk of disease such as Obesity, High Blood Pressure and cancer.",
        icon: DocumentIcon,
    },
    {
        name: 'Diet: ',
        description: 'Diet is an important aspect in healthy living as a healthy diet  improves our health by providing the body  with the essential nutrition',
        icon: DocumentIcon,
    },
]

export default function Home() {
    return (
        <div className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2" id='section'>
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base font-semibold leading-7 text-indigo-600">Healthy Lifestyle</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A way to better to be Wealthy</p>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Living a Healthy lifestyle is essential to our health and well-being as
                                it helps to prevent many disease that are likely to occur now or in the future.
                                Remember that "Health is Wealth".
                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none" id='sub-section'>
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative pl-9">
                                        <dt className="inline font-semibold text-green-900">
                                            <feature.icon className="absolute top-1 left-1 h-5 w-5 text-black-600" aria-hidden="true" />
                                            {feature.name}
                                        </dt>{' '}
                                        <dd className="inline">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                    <img
                        src="./assets/images/Healthy-lifestyle.png"
                        alt="Healthy Lifestyle"
                        id='image'
                        className="w-[30rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[30rem] md:-ml-4 lg:-ml-0"
                    />
                </div>
            </div>
        </div>
    )
}

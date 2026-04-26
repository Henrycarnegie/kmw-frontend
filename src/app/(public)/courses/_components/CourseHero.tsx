import { GraduationCap } from 'lucide-react';

const CourseHero = () => {
    return (
        <section className="relative pt-20 pb-20 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-sky-50 to-transparent -z-10" />
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-sky-200/20 rounded-full blur-3xl" />
            <div className="absolute top-1/2 -left-24 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-5 md:px-10">
                <div className="text-center space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-xs font-bold tracking-widest uppercase">
                        <GraduationCap className="size-4" />
                        Learning Excellence
                    </div>
                    
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                        Find Your Course Here <br />
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default CourseHero;

import Image from "next/image";

type ProjectCardProps = {
  title: string;
  category: string;
  description: string;
  result: string;
  image: string;
};

export function ProjectCard({
  title,
  category,
  description,
  result,
  image,
}: ProjectCardProps) {
  return (
    <article className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
      <div className="relative aspect-[4/3]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <p className="mb-2 text-sm font-semibold text-emerald-700">
          {category}
        </p>
        <h3 className="text-xl font-semibold text-slate-950">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
        <div className="mt-5 rounded-md bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-800">
          {result}
        </div>
      </div>
    </article>
  );
}

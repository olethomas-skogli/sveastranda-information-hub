import { error } from '@sveltejs/kit';
import { categories, bySlug } from '$lib/data/categories';
import type { PageLoad } from './$types';

export const prerender = true;

export const entries = () =>
  categories.filter((c) => !c.externalUrl).map((c) => ({ slug: c.slug }));

export const load: PageLoad = ({ params }) => {
  const category = bySlug[params.slug];
  if (!category || category.externalUrl) error(404, 'Not found');
  return { category };
};

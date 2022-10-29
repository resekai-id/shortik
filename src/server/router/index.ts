import { z } from 'zod';
import { publicProcedure, router } from '../trpc';
import { prisma } from '@/db/client';

export const appRouter = router({
  checkSlug: publicProcedure
    .input(
      z.object({
        slug: z.string(),
      })
    )
    .query(async ({ input }) => {
      const count = await prisma.shortLink.count({
        where: {
          slug: input.slug,
        },
      });
      return { used: count > 0 };
    }),
  createSlug: publicProcedure
    .input(
      z.object({
        slug: z.string(),
        url: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      try {
        await prisma.shortLink.create({
          data: {
            slug: input.slug,
            url: input.url,
          },
        });
      } catch (e) {
        console.log(e);
      }
    }),
});
// export type definition of API
export type AppRouter = typeof appRouter;

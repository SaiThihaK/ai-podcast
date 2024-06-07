import { internalMutation } from "./_generated/server";
import { v } from "convex/values";

export const createUser = internalMutation({
  args: {
    clerkId: v.string(),
    imageUrl: v.string(),
    email: v.string(),
    name: v.string(),
  },
  handler: async (ctx, arg) => {
    await ctx.db.insert("users", {
      clerkId: arg.clerkId,
      email: arg.email,
      imageUrl: arg.imageUrl,
      name: arg.name,
    });
  },
});

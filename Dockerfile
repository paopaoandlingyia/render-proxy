FROM denoland/deno:alpine-1.42.1

WORKDIR /app
COPY . .

# 赋予所有常用权限：
# --allow-all = 允许所有权限（等价于 --allow-net --allow-env --allow-read --allow-write --allow-run --allow-ffi --allow-hrtime --allow-sys --allow-plugin）
CMD ["run", "--allow-all", "deno-proxy.ts"] 
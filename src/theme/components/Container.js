export const Container = {
  baseStyle: ({ colorMode }) => ({
    padding: "1.5rem 2rem",
    border: "4px solid",
    borderColor: colorMode === "dark" ? "white" : "black",
    boxShadow:
      colorMode === "dark" && "0 0 0 4px var(--chakra-colors-gray-900)",
    bg: colorMode === "dark" ? "gray.900" : "white",
  }),
  variants: {
    pixelCircle: (props) => ({
      padding: 0,
      border: 0,
      boxShadow: 0,
      bg: "none",
      w: "max",
      clipPath:
        "polygon(0px 136px, 4px 136px, 4px 132px, 4px 120px, 8px 120px, 8px 116px, 8px 104px, 12px 104px, 12px 96px, 16px 96px, 16px 92px, 16px 88px, 20px 88px, 20px 84px, 20px 80px, 24px 80px, 24px 76px, 24px 72px, 28px 72px, 28px 68px, 32px 68px, 32px 64px, 32px 60px, 36px 60px, 36px 56px, 40px 56px, 40px 52px, 44px 52px, 44px 48px, 48px 48px, 48px 44px, 52px 44px, 52px 40px, 56px 40px, 56px 36px, 60px 36px, 60px 32px, 64px 32px, 68px 32px, 68px 28px, 72px 28px, 72px 24px, 76px 24px, 80px 24px, 80px 20px, 84px 20px, 88px 20px, 88px 16px, 92px 16px, 96px 16px, 96px 12px, 100px 12px, 104px 12px, 104px 8px, 108px 8px, 112px 8px, 116px 8px, 120px 8px, 120px 4px, 124px 4px, 128px 4px, 132px 4px, 136px 4px, 136px 0px, calc(100% - 136px) 0px, calc(100% - 136px) 4px, calc(100% - 132px) 4px, calc(100% - 120px) 4px, calc(100% - 120px) 8px, calc(100% - 116px) 8px, calc(100% - 104px) 8px, calc(100% - 104px) 12px, calc(100% - 96px) 12px, calc(100% - 96px) 16px, calc(100% - 92px) 16px, calc(100% - 88px) 16px, calc(100% - 88px) 20px, calc(100% - 84px) 20px, calc(100% - 80px) 20px, calc(100% - 80px) 24px, calc(100% - 76px) 24px, calc(100% - 72px) 24px, calc(100% - 72px) 28px, calc(100% - 68px) 28px, calc(100% - 68px) 32px, calc(100% - 64px) 32px, calc(100% - 60px) 32px, calc(100% - 60px) 36px, calc(100% - 56px) 36px, calc(100% - 56px) 40px, calc(100% - 52px) 40px, calc(100% - 52px) 44px, calc(100% - 48px) 44px, calc(100% - 48px) 48px, calc(100% - 44px) 48px, calc(100% - 44px) 52px, calc(100% - 40px) 52px, calc(100% - 40px) 56px, calc(100% - 36px) 56px, calc(100% - 36px) 60px, calc(100% - 32px) 60px, calc(100% - 32px) 64px, calc(100% - 32px) 68px, calc(100% - 28px) 68px, calc(100% - 28px) 72px, calc(100% - 24px) 72px, calc(100% - 24px) 76px, calc(100% - 24px) 80px, calc(100% - 20px) 80px, calc(100% - 20px) 84px, calc(100% - 20px) 88px, calc(100% - 16px) 88px, calc(100% - 16px) 92px, calc(100% - 16px) 96px, calc(100% - 12px) 96px, calc(100% - 12px) 100px, calc(100% - 12px) 104px, calc(100% - 8px) 104px, calc(100% - 8px) 108px, calc(100% - 8px) 112px, calc(100% - 8px) 116px, calc(100% - 8px) 120px, calc(100% - 4px) 120px, calc(100% - 4px) 124px, calc(100% - 4px) 128px, calc(100% - 4px) 132px, calc(100% - 4px) 136px, 100% 136px, 100% calc(100% - 136px), calc(100% - 4px) calc(100% - 136px), calc(100% - 4px) calc(100% - 132px), calc(100% - 4px) calc(100% - 120px), calc(100% - 8px) calc(100% - 120px), calc(100% - 8px) calc(100% - 116px), calc(100% - 8px) calc(100% - 104px), calc(100% - 12px) calc(100% - 104px), calc(100% - 12px) calc(100% - 96px), calc(100% - 16px) calc(100% - 96px), calc(100% - 16px) calc(100% - 92px), calc(100% - 16px) calc(100% - 88px), calc(100% - 20px) calc(100% - 88px), calc(100% - 20px) calc(100% - 84px), calc(100% - 20px) calc(100% - 80px), calc(100% - 24px) calc(100% - 80px), calc(100% - 24px) calc(100% - 76px), calc(100% - 24px) calc(100% - 72px), calc(100% - 28px) calc(100% - 72px), calc(100% - 28px) calc(100% - 68px), calc(100% - 32px) calc(100% - 68px), calc(100% - 32px) calc(100% - 64px), calc(100% - 32px) calc(100% - 60px), calc(100% - 36px) calc(100% - 60px), calc(100% - 36px) calc(100% - 56px), calc(100% - 40px) calc(100% - 56px), calc(100% - 40px) calc(100% - 52px), calc(100% - 44px) calc(100% - 52px), calc(100% - 44px) calc(100% - 48px), calc(100% - 48px) calc(100% - 48px), calc(100% - 48px) calc(100% - 44px), calc(100% - 52px) calc(100% - 44px), calc(100% - 52px) calc(100% - 40px), calc(100% - 56px) calc(100% - 40px), calc(100% - 56px) calc(100% - 36px), calc(100% - 60px) calc(100% - 36px), calc(100% - 60px) calc(100% - 32px), calc(100% - 64px) calc(100% - 32px), calc(100% - 68px) calc(100% - 32px), calc(100% - 68px) calc(100% - 28px), calc(100% - 72px) calc(100% - 28px), calc(100% - 72px) calc(100% - 24px), calc(100% - 76px) calc(100% - 24px), calc(100% - 80px) calc(100% - 24px), calc(100% - 80px) calc(100% - 20px), calc(100% - 84px) calc(100% - 20px), calc(100% - 88px) calc(100% - 20px), calc(100% - 88px) calc(100% - 16px), calc(100% - 92px) calc(100% - 16px), calc(100% - 96px) calc(100% - 16px), calc(100% - 96px) calc(100% - 12px), calc(100% - 100px) calc(100% - 12px), calc(100% - 104px) calc(100% - 12px), calc(100% - 104px) calc(100% - 8px), calc(100% - 108px) calc(100% - 8px), calc(100% - 112px) calc(100% - 8px), calc(100% - 116px) calc(100% - 8px), calc(100% - 120px) calc(100% - 8px), calc(100% - 120px) calc(100% - 4px), calc(100% - 124px) calc(100% - 4px), calc(100% - 128px) calc(100% - 4px), calc(100% - 132px) calc(100% - 4px), calc(100% - 136px) calc(100% - 4px), calc(100% - 136px) 100%, 136px 100%, 136px calc(100% - 4px), 132px calc(100% - 4px), 120px calc(100% - 4px), 120px calc(100% - 8px), 116px calc(100% - 8px), 104px calc(100% - 8px), 104px calc(100% - 12px), 96px calc(100% - 12px), 96px calc(100% - 16px), 92px calc(100% - 16px), 88px calc(100% - 16px), 88px calc(100% - 20px), 84px calc(100% - 20px), 80px calc(100% - 20px), 80px calc(100% - 24px), 76px calc(100% - 24px), 72px calc(100% - 24px), 72px calc(100% - 28px), 68px calc(100% - 28px), 68px calc(100% - 32px), 64px calc(100% - 32px), 60px calc(100% - 32px), 60px calc(100% - 36px), 56px calc(100% - 36px), 56px calc(100% - 40px), 52px calc(100% - 40px), 52px calc(100% - 44px), 48px calc(100% - 44px), 48px calc(100% - 48px), 44px calc(100% - 48px), 44px calc(100% - 52px), 40px calc(100% - 52px), 40px calc(100% - 56px), 36px calc(100% - 56px), 36px calc(100% - 60px), 32px calc(100% - 60px), 32px calc(100% - 64px), 32px calc(100% - 68px), 28px calc(100% - 68px), 28px calc(100% - 72px), 24px calc(100% - 72px), 24px calc(100% - 76px), 24px calc(100% - 80px), 20px calc(100% - 80px), 20px calc(100% - 84px), 20px calc(100% - 88px), 16px calc(100% - 88px), 16px calc(100% - 92px), 16px calc(100% - 96px), 12px calc(100% - 96px), 12px calc(100% - 100px), 12px calc(100% - 104px), 8px calc(100% - 104px), 8px calc(100% - 108px), 8px calc(100% - 112px), 8px calc(100% - 116px), 8px calc(100% - 120px), 4px calc(100% - 120px), 4px calc(100% - 124px), 4px calc(100% - 128px), 4px calc(100% - 132px), 4px calc(100% - 136px), 0px calc(100% - 136px))",
    }),
  },
};

import { DotmCircular7 } from "@/components/ui/dotm-circular-7";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-5">
        <DotmCircular7
          size={84}
          dotSize={10}
          speed={1.9}
          className="text-foreground"
        />
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          BHUVANA
        </span>
      </div>
    </div>
  );
}


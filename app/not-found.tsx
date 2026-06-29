import { Container, ButtonLink } from "@/components/ui";
import { ArrowRightIcon } from "@/components/icons";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="font-mono text-sm uppercase tracking-[0.2em] text-brand">
        404
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-pretty text-ink-muted">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <div className="mt-8">
        <ButtonLink href="/">
          Back home
          <ArrowRightIcon width={16} height={16} />
        </ButtonLink>
      </div>
    </Container>
  );
}

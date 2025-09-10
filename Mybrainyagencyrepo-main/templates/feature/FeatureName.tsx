import { useEffect, useState } from 'react';
import Container from '../src/components/ui/Container';
import Section from '../src/components/ui/Section';
import Card from '../src/components/ui/Card';
import Button from '../src/components/ui/Button';

export default function FeatureName() {
  const [state, setState] = useState<'loading'|'empty'|'error'|'ready'>('loading');
  type Item = { title: string; description: string };
  const [data, setData] = useState<Item[]>([]);

  useEffect(() => {
    (async () => {
      try {
  const items: Item[] = [];
        setData(items);
        setState(items.length ? 'ready' : 'empty');
      } catch {
        setState('error');
      }
    })();
  }, []);

  return (
    <Section>
      <Container>
        <div className="max-w-prose">
          <h1 className="text-fluid-h1 leading-tight">Feature Name</h1>
          <p className="mt-3 text-fluid-body opacity-80">Short outcome-led description.</p>
        </div>

        {state === 'loading' && (
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => <div key={i} className="h-28 animate-pulse rounded-xl bg-white/10" />)}
          </div>
        )}

        {state === 'empty' && (
          <Card className="mt-6">
            <p>No items yet. <Button className="ml-2">Add first</Button></p>
          </Card>
        )}

        {state === 'error' && (
          <Card className="mt-6" role="alert">
            <p>Something went wrong. <Button onClick={() => location.reload()}>Retry</Button></p>
          </Card>
        )}

        {state === 'ready' && (
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.map((item, i) => (
              <Card key={i}>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm/6 opacity-80">{item.description}</p>
                <Button className="mt-3">Learn more</Button>
              </Card>
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
}

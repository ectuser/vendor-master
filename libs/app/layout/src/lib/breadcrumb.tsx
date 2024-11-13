import { Params, useMatches } from 'react-router-dom';

interface IMatches {
  id: string;
  pathname: string;
  params: Params<string>;
  data: unknown;
  handle: unknown;
}

type HandleType = {
  crumb: (param?: string) => React.ReactNode;
};

export const Breadcrumbs = () => {
  const matches: IMatches[] = useMatches();
  const crumbs = matches
    .filter((match) =>
      Boolean(match.handle && (match.handle as HandleType).crumb)
    )
    .map((match) => {
      const crumb = (match.handle as HandleType).crumb(
        match.data as string | undefined
      );
      return crumb as React.ReactNode;
    });

  return (
    <div className="breadcrumbs text-sm">
      <ul>
        {crumbs.map((crumb, index) => (
          <li key={index}>{crumb}</li>
        ))}
      </ul>
    </div>
  );
};

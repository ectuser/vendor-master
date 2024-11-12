import { Link, Params, useMatches } from 'react-router-dom';

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
    <ol className="flex">
      {crumbs.map((crumb, index) => (
        <li key={index}>
          <button className="btn btn-sm btn-link px-0">{crumb}</button>
          {index !== crumbs.length - 1 ? <span className="px-1">/</span> : null}
        </li>
      ))}
    </ol>
  );
};

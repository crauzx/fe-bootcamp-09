import UserDetailView from "./user-detail-view";

export default async function UserDetailPage({ params }) {
  const { slug } = params;

  return <UserDetailView user={userSnapshot.data()} />;
}

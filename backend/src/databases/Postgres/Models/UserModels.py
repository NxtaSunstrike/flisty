
from sqlalchemy.orm import DeclarativeBase
from sqlalchemy import String, Integer, ForeignKey
from sqlalchemy.orm import relationship, Mapped, mapped_column


class Base(DeclarativeBase):
        pass

class User(Base):
    __tablename__ = 'users'
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    email: Mapped[str] = mapped_column(String(50), unique=True)
    password: Mapped[str] = mapped_column(String(50))
    name: Mapped[str] = mapped_column(String(50))

    posts: Mapped[list['Posts']] = relationship(
        back_populates='user', lazy='joined'
    )

    folowers: Mapped[list['Folowers']] = relationship(
        back_populates='user', lazy='joined'
    )


class Folowers(Base):
    __tablename__ = 'folowers'
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    user_id: Mapped[int] = mapped_column(ForeignKey('users.id'))
    follower_id: Mapped[int] = mapped_column(Integer)

    user: Mapped[User] = relationship(
        back_populates='folowers'
    )

class Posts(Base):
    __tablename__ = 'posts'
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    user_id: Mapped[int] = mapped_column(ForeignKey('users.id'))
    data: Mapped[str] = mapped_column(String(50))
    likes: Mapped[int] = mapped_column(Integer)

    user: Mapped['User'] = relationship(
        back_populates='posts'
    )
    comments: Mapped[list['Comments']] = relationship(
        back_populates='post'
    )

class Comments(Base):
    __tablename__ = 'comments'
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    post_id: Mapped[int] = mapped_column(ForeignKey('posts.id'))
    user_id: Mapped[int] = mapped_column(ForeignKey('users.id'))
    data: Mapped[str] = mapped_column(String(50))

    post: Mapped['Posts'] = relationship(
        back_populates='comments'
    )


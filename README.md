## usersテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|name|string|null: false|
|email|string|null: false|
|password|string|null: false|

### Association
- has_many :groups, through: :members


## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|name|string|null: false|

### Association
- has_many :users, through: :members
- has_many :chats


## chatsテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|group_id|references|null: false, foreign_key: true|
|body|string||
|image|string||

### Association
- belongs_to :group

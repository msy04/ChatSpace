json.user_name @message.user.name
json.created_time @message.created_at.strftime("%Y/%m/%d %H:%M")
json.content @message.content

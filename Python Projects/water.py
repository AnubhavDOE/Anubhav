from winotify import Notification,audio


toast = Notification(app_id="Water Notifier",title="Water Time",msg="Please Drink water",duration="long",icon=r"D:\python\notification thingies\dragon.png")
toast.add_actions(label="Fine")
toast.show()
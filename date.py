import datetime

CurrentDate = datetime.datetime.today().date()

print(CurrentDate)

ExpectedDate = datetime.datetime(2019, 10, 27).date()
EndDate = datetime.datetime(2019, 10, 29).date()

print(ExpectedDate)



if CurrentDate >= ExpectedDate and CurrentDate < EndDate:
    print("Date is today")
else:
    print("Dont run")
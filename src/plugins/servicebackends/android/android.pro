TARGET  = qandroid

QT += service androidextras
QT -= gui

HEADERS += \
	androidserviceplugin.h \
	androidservicebackend.h \
    androidservicecontrol.h

SOURCES += \
	androidserviceplugin.cpp \
	androidservicebackend.cpp \
    androidservicecontrol.cpp

DISTFILES += android.json

PLUGIN_TYPE = servicebackends
PLUGIN_EXTENDS = service
PLUGIN_CLASS_NAME = AndroidServicePlugin
load(qt_plugin)
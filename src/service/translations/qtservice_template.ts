<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1">
<context>
    <name>AndroidServiceControl</name>
    <message>
        <location filename="../../plugins/servicebackends/android/androidservicecontrol.cpp" line="+32"/>
        <location line="+6"/>
        <source>The bind command must be called with a QAndroidServiceConnection* as first parameter and QtAndroid::BindFlags as optional second parameter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+8"/>
        <location line="+6"/>
        <source>The unbind command must be called with a QAndroidServiceConnection* as only parameter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+8"/>
        <location line="+6"/>
        <source>The startWithIntent command must be called with a QAndroidIntent as only parameter</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>LaunchdServiceControl</name>
    <message>
        <location filename="../../plugins/servicebackends/launchd/launchdservicecontrol.cpp" line="+54"/>
        <source>Failed to find launchctl executable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+23"/>
        <source>launchctl crashed with error: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+4"/>
        <source>launchctl did not exit in time</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QtService::ServiceControl</name>
    <message>
        <location filename="../servicecontrol.cpp" line="+76"/>
        <source>Operation custom command for kind %1 is not implemented for backend %2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Reading the service status is not implemented for backend %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Reading the autostart state is not implemented for backend %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Operation start is not implemented for backend %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Operation stop is not implemented for backend %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Operation pause is not implemented for backend %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Operation resume is not implemented for backend %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Operation reload is not implemented for backend %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Operation enable autostart is not implemented for backend %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Operation disable autostart is not implemented for backend %1</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>StandardServiceControl</name>
    <message>
        <location filename="../../plugins/servicebackends/standard/standardservicecontrol.cpp" line="+50"/>
        <source>Failed to access lockfile with error: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+24"/>
        <source>Unabled to find executable for service with id &quot;%1&quot;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+40"/>
        <source>Failed to start service process with error: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+16"/>
        <source>Failed to get pid of running service</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+18"/>
        <source>Service did not stop yet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Failed to send stop signal with error: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Failed to disable local console handler with error: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Failed to attach to service console with error: %1</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SystemdServiceControl</name>
    <message>
        <location filename="../../plugins/servicebackends/systemd/systemdservicecontrol.cpp" line="+116"/>
        <source>Unknown service state %1 for service %2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Service %1 was not found as systemd service</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+60"/>
        <source>Failed to find systemctl executable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+34"/>
        <source>systemctl crashed with error: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+4"/>
        <source>systemctl did not exit in time</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>WindowsServiceControl</name>
    <message>
        <location filename="../../plugins/servicebackends/windows/windowsservicecontrol.cpp" line="+11"/>
        <source>Failed to get acces to service manager with error: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+32"/>
        <location line="+38"/>
        <source>Failed to query service status with error: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+18"/>
        <location line="+6"/>
        <source>The command must be called with a single integer [128,255] as argument</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Failed to send command %1 to service with error: %2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+19"/>
        <source>Failed to start service with error: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+19"/>
        <source>Failed to stop service with error: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+15"/>
        <source>Failed to pause service with error: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Failed to resume service with error: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+18"/>
        <location line="+18"/>
        <source>Failed to enable autostart with error: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Failed to get access to service with error: %1</source>
        <translation type="unfinished"></translation>
    </message>
</context>
</TS>
